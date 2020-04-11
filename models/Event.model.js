const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventsSchema = new Schema(
  {
    eventType: { type: String, enum: ["Conference", "Wedding", "Birthday"] },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, default: Date.now },
    available: { type: Boolean },
    description: { type: String },
    location: { type: String },
    price: { type: Number },
    image: { type: String },
    imageArray: { type: [String] },
  },
  {
    // keeps record when is created and updated
    timestamps: true,
  }
);

// const Author = model('Author', authorSchema);
// module.exports = Author;

module.exports = model("Event", eventsSchema);
