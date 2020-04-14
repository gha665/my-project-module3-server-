const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const foodSchema = new Schema(
  {
    // unless you are defining more than the "type" property, you don't have to use {} (see below)
    // firstName: {type: String, require: true}
    title: String,
    origin: {
      type: String,
      enum: ["Latin American", "European", "World Cuisine"],
    },
    description: String,
    rating: Number,
    price: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Food", foodSchema);
