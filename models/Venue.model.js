const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const venuesSchema = new Schema(
  {
    venueType: {
      type: String,
      enum: [
        "Business Center",
        "Hotel",
        "Gallery",
        "Villa",
        "Restaurant",
        "Beach",
        "Home",
        "Night Club",
      ],
    },
    date: { type: Date, default: Date.now },
    title: {type: String},
    address: {type: String},
    description: { type: String },
    price: { type: Number },
    google_rating: { type: Number },
    google_reviews: { type: Number },
    thumbnail_url: { type: String }
  },
  {
    // keeps record when is created and updated
    timestamps: true,
  }
);

// const Author = model('Author', authorSchema);
// module.exports = Author;

module.exports = model("Venue", venuesSchema);
