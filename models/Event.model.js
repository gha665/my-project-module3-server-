const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventsSchema = new Schema(
  {
    eventType: { type: String, enum: ["conference", "wedding", "birthday"] },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, default: Date.now },
    food: { type: String },
    addons: [{ type: mongoose.Schema.Types.ObjectId, ref: "AddOn" }],

    // TODO: add me in later when I get time
    // venue: { type: mongoose.Schema.Types.ObjectId, ref: "Venue" },
    // description: { type: String },
    // thumbnail_url: { type: String },
    // guests: { type: Number },
    // price: { type: Number }, // SUM'd up at the end with all price's of models
  },
  {
    // keeps record when is created and updated
    timestamps: true,
  }
);

// const Author = model('Author', authorSchema);
// module.exports = Author;

module.exports = model("Event", eventsSchema);
