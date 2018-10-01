const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../utilities/authenticate");
const userType = require("../../utilities/userType");
const User = require("../../models/user");

router.use(isLoggedIn);
router.use(userType.isStudent);

router.get("/details", (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
