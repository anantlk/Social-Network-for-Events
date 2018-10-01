var express = require("express");
var router = express.Router();
var isLoggedIn = require("../../utilities/authenticate");
var User = require("../../models/user");

router.use(isLoggedIn);

/**
 * @api {get} /api/user IsLoggedIn
 * @apiName IsLoggedIn
 * @apiGroup User
 *
 * @apiDescription This route is will allow to check the log in status of the user.
 *
 * @apiSuccess {Boolean} success Login status.
 */
router.get("/details", async (req, res) => {
  try {
    let user = await User.findOne(
      { _id: req.user._id },
      { _id: 0, password: 0 }
    );
    res.json({ user, success: true });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
