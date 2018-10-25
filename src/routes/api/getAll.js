const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../utilities/authenticate");
const database = require("../../services/database");

router.use(isLoggedIn);

router.get("/chapters", async (req, res, next) => {
  try {
    let chapters = await database.getOrganizations();
    res.json({ success: true, chapters });
  } catch (error) {
    return next(error);
  }
});

router.get("/events", async (req, res, next) => {
  try {
    let events = await database.getAllEvents();
    res.json({ success: true, events });
  } catch (error) {}
});

router.get("/role", async (req, res, next) => {
  try {
    res.json({ success: true, role: req.user.role });
  } catch (error) {}
});
module.exports = router;
