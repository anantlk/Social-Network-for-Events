const express = require("express");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const index = require("./routes/api/index");
const env = require("dotenv").config();
const admin = require("./routes/api/admin");
const app = express();
const flash = require("connect-flash");
const session = require("cookie-session");
const mongoose = require("mongoose");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// var uri =
//   "mongodb://" +
//   process.env.mongoUser +
//   ":" +
//   process.env.mongoPass +
//   "@ds163510.mlab.com:63510/hooknotes";
// var db = mongoose.connect(uri);

mongoose
  .connect("mongodb://localhost/IWP")
  .then(res => {
    console.log("Connected To Database");
  })
  .catch(err => {
    console.log(err);
    console.log("Connection failed");
  });

require("./config/passport")(passport);
app.use(session({ secret: "IWP events portal" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use("/api", index);
app.use("/api/admin", admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.json({ success: false, message: err.message });
});

module.exports = app;
