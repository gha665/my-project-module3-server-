const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const foodSchema = new Schema(
  {
    // unless you are defining more than the "type" property, you don't have to use {} (see below)
    // firstName: {type: String, require: true}
    title: { type: String },
    origin: {
      type: { type: String },
      enum: ["Latin American", "European", "World Cuisine"],
    },
    description: { type: String },
    price: { type: Number },
    menu: { type: Array },
    google_rating: { type: Number },
    google_reviews: { type: Number },
    thumbnail_url: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Food", foodSchema);
