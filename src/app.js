const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const promise = require("bluebird");
require("dotenv").config();
require("./config/passport")(passport);

mongoose.Promise = promise;

// routes path
const apiRouter = require("./routes/api/index");

const app = express();

const config = require("./config/constants");

console.log(config.MONGO_URI);

mongoose
  .connect(
    config.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(err => {
    console.log("Unable to connect to mongoDB, Error:", err.message);
  });

// configurations
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", apiRouter);

app.get("*", (req, res, next) => {
  try {
    res.redirect("/api" + req.path);
  } catch (error) {
    console.log("No");
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(req.url);

  next(createError(404));
});

app.use(function(err, req, res, next) {
  console.log(err);

  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
    error: process.env.NODE_ENV === "development" ? err : {}
  });
});

module.exports = app;
