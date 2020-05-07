const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const addonsSchema = new Schema(
  {
    category: { type: String, enum: ["Entertainment", "Media & Extras"] },
    title: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    thumbnail_url: { type: String },
  },
  {
    // keeps record when is created and updated
    timestamps: true,
  }
);

module.exports = model("Addon", addonsSchema);
