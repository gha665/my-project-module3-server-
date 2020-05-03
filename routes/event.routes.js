// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require("express");
const eventRouter = express.Router();

// ********* require Event model in order to use it for CRUD *********
const Event = require("../models/Event.model");

// ****************************************************************************************
// POST route to create a new event in the DB
// ****************************************************************************************

// <form action="/events" method="POST">
eventRouter.post("/", (req, res, next) => {
  console.log(req.body);
  Event.create(req.body)
    .then((eventDoc) => res.status(200).json(eventDoc))
    .catch((err) => next(err));
});

// ****************************************************************************************
// GET all events from the DB
// ****************************************************************************************

eventRouter.get("/", (req, res, next) => {
  Event.find() // <-- .find() method gives us always an ARRAY back
    .then((eventsFromDB) => {
      const events = {};
      eventsFromDB.map((event) => {
        if (!events[event.eventType]) {
          events[event.eventType] = event;
        } else {
          events[event.eventType].push(event);
        }
      });
      res.status(200).json({ events });
    })
    .catch((err) => next(err));
});

// ****************************************************************************************
// UPDATE an event in the DB
// ****************************************************************************************
eventRouter.post("/event/update/:eventId", (req, res) => {
  // console.log(req.body);
  Event.findByIdAndUpdate({ _id: req.params.eventId }, req.body, { new: true })
    .then((updatedEvent) => res.status(200).json(updatedEvent))
    .catch((err) => console.log(err));
});

// ****************************************************************************************
// DELETE an event from the DB
// ****************************************************************************************
eventRouter.post("/event/delete/:eventId", (req, res) => {
  // console.log(req.body);
  Event.findByIdAndDelete({ _id: req.params.eventId })
    .then((deletedEvent) =>
      res.status(200).json({ message: `${deletedEvent.eventType} was deleted` })
    )
    .catch((err) => console.log(err));
});

module.exports = eventRouter;
