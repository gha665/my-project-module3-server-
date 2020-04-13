// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require("express");
const router = express.Router();

// ********* require models in order to use them *********
const Event = require("../models/Event.model");
const Food = require("../models/Food.model");

// ****************************************************************************************
// POST - create
// ****************************************************************************************

// <form action="/books" method="POST">
router.post("/food", (req, res) => {
  // console.log(req.body);
  Food.create(req.body)
    .then((food) => res.status(200).json({ food: food }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// GET route to get all the food
// ****************************************************************************************

router.get("/food", (req, res) => {
  Food.find()
    .then((foodFromDB) => res.status(200).json({ food: foodFromDB }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// POST route to delete the food
// ****************************************************************************************

// <form action="/books/{{this._id}}/delete" method="post">
router.post("/food/:foodId/delete", (req, res) => {
  Food.findByIdAndRemove(req.params.foodId)
    .then(() => res.json({ message: "Successfully removed" }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// POST route to save the updates
// ****************************************************************************************

// <form action="/books/{{foundBook._id}}/update" method="POST">
router.post("/food/:id/update", (req, res) => {
  Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedFood) => res.status(200).json({ food: updatedFood }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// GET route for getting the food details
// ****************************************************************************************

router.get("/food/:someFoodId", (req, res) => {
  Food.findById(req.params.someFoodId)
    .populate("cuisine")
    .then((foundFood) => res.status(200).json({ book: foundFood }))
    .catch((err) => next(err));
});

module.exports = router;
