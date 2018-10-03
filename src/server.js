const express = require("express");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");
var proxy = require("express-http-proxy");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const index = require("./routes/api/index");
const env = require("dotenv").config();
const admin = require("./routes/api/admin");
const app = express();
const flash = require("connect-flash");
const session = require("express-session");
const mongoose = require("mongoose");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

let uri =
  "mongodb://" +
  process.env.MONGO_USER +
  ":" +
  process.env.MONGO_PASS +
  "@ds121203.mlab.com:21203/iwp-project";

let db = mongoose.connect(uri);

// mongoose
//   .connect("mongodb://localhost/IWP")
//   .then(res => {
//     console.log("Connected To Database");
//   })
//   .catch(err => {
//     console.log(err);
//     console.log("Connection failed");
//   });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(session({ secret: "IWP events portal" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./config/passport")(passport);

app.use("/api", proxy("localhost:4200"));
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
