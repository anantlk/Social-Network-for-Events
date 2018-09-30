const express = require("express");
const router = express.Router();
const passport = require("passport");
const isLoggedIn = require("../../utilities/authenticate");

/**
 * @api {post} /api/register Initial Signup
 * @apiName Register
 * @apiGroup Registration
 *
 * @apiDescription This route is used for handling the initial signup form submit
 *
 * @apiParam {String} firstName First Name Of The User
 * @apiParam {String} lastName Last Name Of The User
 * @apiParam {String} email Email Id Of The User
 * @apiParam {String} password Password Of The User
 * @apiParam {String} username Unique Username Of The User
 *
 * @apiSuccess {Boolean} success Login status.
 * @apiSuccess {JSON} user User info.
 */

router.route("/register").post((req, res, next) => {
  passport.authenticate("newRegister", (error, user, info) => {
    if (error) {
      return next(error);
    }
    res.json({ success: true, user });
  })(req, res, next);
});

/**
 * @api {post} /api/login Login
 * @apiName Login
 * @apiGroup Registration
 *
 * @apiDescription This route is used for checking that the user has registered on the website or not.
 *
 * @apiParam {String} email Email Id Of The User
 * @apiParam {String} password Password Of The User
 *
 * @apiSuccess {Boolean} success Login status.
 * @apiSuccess {JSON} user User info.
 */

router.route("/login").post((req, res, next) => {
  passport.authenticate("login", (error, user, info) => {
    if (error) {
      return next(error);
    }
    res.json({ success: true, user });
  })(req, res, next);
});

/**
 * @api {get} /api/logout Logout
 * @apiName Logout
 * @apiGroup Registration
 *
 * @apiDescription This route is destroys the user session If the user has an active session.
 * @apiSuccess {Boolean} success Returns true if user is logged in
 * @apiSuccess {String} message Logout Message
 */

router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  res.json({ success: true, message: "Successfully Logged Out!" });
});

module.exports = router;
