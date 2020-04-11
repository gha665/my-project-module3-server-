const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

// ****************************************************************************************
// UPDATE user info in the DB
// ****************************************************************************************
router.post("/update/profile", (req, res) => {
  User.findByIdAndUpdate({ _id: req.user._id }, req.body, { new: true }) // <=== getting user from session
    .then((updatedUser) => {
      res
        .status(201)
        .json({ user: updatedUser, message: "User info has been updated" });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
