const passport = require("passport");
const database = require("../services/portal/users");
module.exports = {
  isLoggedIn: (req, res, next) => {
    try {
      passport.authenticate("jwt", (err, user) => {
        console.log(err, user);
        if (err) throw err;
        if (!user) return next(new Error("Access Token Expired"));
        return next();
      })(req, res, next);
    } catch (error) {
      return next(error);
    }
  },

  isVerified: async (req, res, next) => {
    try {
      if (!req.body.username) {
        throw new Error("Request body is insufficient");
      }
      const result = await database.checkVerification(req.body.username);
      if (!result) throw new Error("User not verified");
      return next();
    } catch (error) {
      return next(error);
    }
  }
};
