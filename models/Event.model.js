const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventsSchema = new Schema(
  {
    eventType: { type: String, enum: ["Conference", "Wedding", "Birthday"] },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, default: Date.now },
    // IH: available: { type: Boolean },
    description: { type: String },
    
    // IH: image: { type: String },
    // IH: imageArray: { type: [String] },
  
    guests: { type: Number },
    
    venue: { type: mongoose.Schema.Types.ObjectId, ref: "Venue" },
    food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
    add_ons: [{ type : mongoose.Schema.Types.ObjectId, ref: 'AddOn' }],

    price: { type: Number }, // SUM'd up at the end with all price's of models
  },
  {
    // keeps record when is created and updated
    timestamps: true,
  }
);

// const Author = model('Author', authorSchema);
// module.exports = Author;

module.exports = model("Event", eventsSchema);
