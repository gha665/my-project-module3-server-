const mongoose = require("mongoose");
const Food = require("../models/Food.model");
require("../configs/db.config");
// User.collection.drop();

const foods = [
  {
    path: "https://ca.slack-edge.com/T02CQ4EN4-UNCE3P0EL-1f41629c62fc-512",
    title: "",
    origin: "",
    description: "",
    rating: 5,
    price: $10,
  },
];

//create foods
Food.create(foods)
  .then((savedFoodsDB) => {
    console.log(`Foods are created`);
  })
  .catch((err) => console.log(`Error while creating new foods ${err}`));
