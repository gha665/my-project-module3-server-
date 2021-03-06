const { Router } = require("express");

const router = new Router();

const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const saltRounds = 10;
const passport = require("passport");
const User = require("../models/User.model");

const routeGuard = require("../configs/route-guard.config");

// .post() route ==> to process form data
router.post("/signup", (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  // console.log("USER", firstName, lastName, email, password);
  if (!firstName || !lastName || !email || !password) {
    res.status(401).json({
      message:
        "All fields are mandatory. Please provide your username, email and password.",
    });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(password, salt))
    .then((hashedPassword) => {
      return User.create({
        // firstName,
        // lastName,
        // email,
        ...req.body,
        passwordHash: hashedPassword,
      })
        .then((user) => {
          // res.status(200).json({ user });
          req.login(user, (err) => {
            if (err)
              return res
                .status(500)
                .json({ message: "Something went wrong with login" });
            user.passwordHash = undefined;
            res.status(200).json({ message: "Login successful!", user });
          });
        })
        .catch((err) => {
          if (err instanceof mongoose.Error.ValidationError) {
            res.status(500).json({ message: err.message });
          } else if (err.code === 11000) {
            res.status(500).json({
              message:
                "Username and email need to be unique. Either username or email is already used.",
            });
          } else {
            next(err);
          }
        });
    })
    .catch((err) => next(err));
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, failureDetails) => {
    console.log("user", user);
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong with database query." });
    }

    if (!user) {
      res.status(401).json(failureDetails);
    }

    req.login(user, (err) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Something went wrong with login" });
      user.passwordHash = undefined;
      res.status(200).json({ message: "Login successful", user });
      
    });
  })(req, res, next);
});

router.post("/logout", routeGuard, (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Logout successful" });
});

router.get("/isLoggedIn", (req, res) => {
  if (req.user) {
    req.user.passwordHash = undefined;
    res.status(200).json({ user: req.user });
    return;
  }
  res.status(401).json({ message: "You are not logged in" });
});

router.get("/users", (req, res) => {
  User.find()
    .then((usersFromDb) => {
      res.status(200).json({ users: usersFromDb });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
