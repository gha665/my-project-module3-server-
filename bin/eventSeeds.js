const mongoose = require("mongoose");
const Event = require("../models/Event.model");
require("../configs/db.config");
// User.collection.drop();

const events = [
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UNCE3P0EL-1f41629c62fc-512",
    title: "adam",
    description: "Adam",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UP3316YP2-d1d03b2fc512-512",
    title: "evgeny",
    description: "Evgeny",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "http://res.cloudinary.com/dml50vwsd/image/upload/v1581608885/users/IMG_2612.JPG.jpg",
    title: "ashraf",
    description: "Ashrafzhon",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "http://res.cloudinary.com/dml50vwsd/image/upload/v1583011599/users/profile_pic.jpeg.jpg",
    title: "kevin",
    description: "Kevin",
    price: 20,
    food: "sausage",
    eventType: "wedding",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UN6RGB6SW-8518d344ae90-512",
    title: "delvis",
    description: "Delvis",
    price: 20,
    food: "sausage",
    eventType: "wedding",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UL3A3BH3J-e4015450d5bf-512",
    title: "erick",
    description: "Erick",
    price: 20,
    food: "sausage",
    eventType: "wedding",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UMKHVBR52-d1b451887388-512",
    title: "gustavo",
    description: "Gustavo",
    price: 20,
    food: "sausage",
    eventType: "birthday",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UPE3Z3HGX-a1c795d9b524-512",
    title: "humberto",
    description: "Humberto",
    price: 20,
    food: "sausage",
    eventType: "birthday",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UP444HG0Z-fc75e4bfdea7-512",
    title: "jerlissa",
    description: "Jerlissa",
    price: 20,
    food: "sausage",
    eventType: "birthday",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UL9TD3151-37de1763345c-512",
    title: "jose",
    description: "Jose",
    price: 20,
    food: "sausage",
    eventType: "birthday",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-ULDSEKW64-8d48b6952645-512",
    title: "kayla",
    description: "Kayla",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UMBL0HSV6-1dab1234d618-512",
    title: "melany",
    description: "Melany",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UP4G651A8-2eb046799955-512",
    title: "michaela",
    description: "Michaela",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-U7GGM8JRM-6434bb9a254e-512",
    title: "marcos",
    description: "Marcos ",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UNY9H2JPM-89211449f3b6-512",
    title: "delio",
    description: "Delio",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-U0YEGPH4Z-ff94dd744833-512",
    title: "brito",
    description: "Daniel",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-U3TFNTZDJ-5b0e1506346a-512",
    title: "sandrabosk",
    description: "Aleksandra",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-ULPBT934N-34aec0f37306-512",
    title: "michel",
    description: "Michel",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-U0GMWHJHF-0d658c16cd1a-512",
    title: "nickborbe",
    description: "Nicolas",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UNYN10734-4f347f1b29ae-512",
    title: "stanley",
    description: "Stanley",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url: "/images/default-img.png",
    title: "stefan",
    description: "Stefan",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-ULWDPLMQB-67ac8baa19a8-512",
    title: "veronica",
    description: "Veronica",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-U7C5G8A75-6b4b83e4fe34-512",
    title: "jessica",
    description: "Jessica",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
  {
    thumbnail_url:
      "https://ca.slack-edge.com/T02CQ4EN4-UL2TEB2E8-d9ce4f72f99b-512",
    title: "carlos",
    description: "Carlos",
    price: 20,
    food: "sausage",
    eventType: "conference",
  },
];

//create users
Event.create(events)
  .then((savedEventsDB) => {
    console.log(`Events are created`);
  })
  .catch((err) => console.log(`Error while creating new events ${err}`));
