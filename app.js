require("dotenv").config();
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();
// require database configuration

require("./configs/db.config");

// Middleware Setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// make sure express- session is used before the passport
require("./configs/session.config")(app);

require("./configs/passport/passport.config.js")(app);

app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: true, //process.env.FRONTEND_POINT,
    credentials: true,
  })
);
// app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

// ============================= CORS FIX ======
// app.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "http://localhost:5000/api/auth/signup.TLD"
//     ); // <=== Update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.get("/", (req, res, next) => {
//   // Handle the GET for this route
// });

// app.post("/", (req, res, next) => {
//   // Handle the POST for this route
// });
// ============================= END OF CORS FIX ======

// const index = require('./routes/index');
// app.use('/', index);
//      |  |  |
//      |  |  |
//      V  V  V
app.use("/", require("./routes/index.routes"));
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/auth", require("./routes/authentication.routes"));
app.use("/api/events", require("./routes/event.routes"));
app.use("/api/food", require("./routes/food.routes"));
app.use("/api/addons", require("./routes/addon.routes"));

module.exports = app;
