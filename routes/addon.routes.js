// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require("express");
const router = express.Router();

// ********* require models in order to use them *********
const Event = require("../models/Event.model");
const Food = require("../models/Food.model");
const Addon = require("../models/Addon.model");

// ****************************************************************************************
// POST - create
// ****************************************************************************************

// <form action="/books" method="POST">
router.post("/addon", (req, res) => {
  // console.log(req.body);
  Addon.create(req.body)
    .then((addon) => res.status(200).json({ addon: addon }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// GET route to get all the addons
// ****************************************************************************************

router.get("/addon", (req, res) => {
  Addon.find()
    .then((addonFromDB) => res.status(200).json({ addon: addonFromDB }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// POST route to delete the addon
// ****************************************************************************************

// <form action="/books/{{this._id}}/delete" method="post">
router.post("/addon/:addonId/delete", (req, res) => {
  Addon.findByIdAndRemove(req.params.addonId)
    .then(() => res.json({ message: "Successfully removed" }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// POST route to save the updates
// ****************************************************************************************

// <form action="/books/{{foundBook._id}}/update" method="POST">
router.post("/addon/:id/update", (req, res) => {
  Addon.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedAddon) => res.status(200).json({ Addon: updatedAddon }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// GET route for getting the addon details
// ****************************************************************************************

router.get("/addon/:someAddonId", (req, res) => {
  Addon.findById(req.params.someAddonId)
    .populate("addons")
    .then((foundAddon) => res.status(200).json({ addon: foundAdon }))
    .catch((err) => next(err));
});

module.exports = router;
