const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../utilities/authenticate");
const userType = require("../../utilities/userType");
const database = require("../../services/database");

router.use(isLoggedIn);
router.use(userType.isOrganization);

router.get("/details", (req, res, next) => {
  try {
    res.json({ success: true, user: req.user });
  } catch (error) {
    return next(error);
  }
});

router.post("/add-event", async (req, res, next) => {
  try {
    let result = await database.addEvent(req.body, req.user.id);
    res.json({ success: true });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
