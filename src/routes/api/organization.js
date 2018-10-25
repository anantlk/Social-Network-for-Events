const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../utilities/authenticate");
const userType = require("../../utilities/userType");
const database = require("../../services/database");

router.use(isLoggedIn);
router.use(userType.isOrganization);

router.post("/add-event", async (req, res, next) => {
  try {
    let result = await database.addEvent(req.body, req.user.id);
    res.json({ success: true });
  } catch (error) {
    return next(error);
  }
});

router.post("/:eventId/post-attendance", (req, res, next) => {
  try {
    result = database.postAttendance(req.params.eventId, req.body, req.user.id);
    res.json({ success: true, result });
  } catch (error) {
    return next(error);
  }
});

router.get("/details", async (req, res, next) => {
  try {
    let organization = await database.getOrganizationById(req.user.id);
    res.json({ success: true, organization });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
