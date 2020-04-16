const mongoose = require("mongoose");
const Food = require("../models/Food.model");
require("../configs/db.config");
// User.collection.drop();

const foods = [
  {
    title: "Sergio's Restaurant",
    origin: "Latin American",
    description:
      "Modest outlet of a family-owned chain packing in diners for all-day breakfast & late-night dinner.",
    price: 50,
    menu: ["Churassco", "Ropa Verj"],
    google_rating: 4.3,
    google_reviews: 2158,
    thumbnail_url: "https://image-of-restaurant-here.jpg",
  },
];

//create foods
Food.create(foods)
  .then((savedFoodsDB) => {
    console.log(`Foods are created`);
  })
  .catch((err) => console.log(`Error while creating new foods ${err}`));
