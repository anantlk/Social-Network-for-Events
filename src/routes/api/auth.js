const express = require("express");
const router = express.Router();
const passport = require("passport");
const isLoggedIn = require("../../utilities/authenticate");

router.route("/register").post((req, res, next) => {
  passport.authenticate("newRegister", (error, user, info) => {
    if (error) {
      return next(error);
    }
    req.login(user, error => {
      if (error) {
        return next(error);
      }
      res.json({ success: true, user });
    });
  })(req, res, next);
});

router.route("/login").post((req, res, next) => {
  passport.authenticate("login", (error, user, info) => {
    if (error) {
      return next(error);
    }
    req.login(user, error => {
      if (error) {
        return next(error);
      }
      res.json({ success: true, user });
    });
  })(req, res, next);
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  res.json({ success: true, message: "Successfully Logged Out!" });
});

module.exports = router;
