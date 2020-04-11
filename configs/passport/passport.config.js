const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')

require("./local-strategy.config");
require("./serializers.config");


module.exports = app => {
    app.use(
        session({
          secret: process.env.SESS_SECRET,
          resave: true,
          saveUninitialized: true,
          store: new MongoStore({ mongooseConnection: mongoose.connection }),
        })
      );
    app.use(passport.initialize())
    app.use(passport.session())
}