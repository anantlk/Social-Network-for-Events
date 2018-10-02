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

router.get("/upcoming-events", async (req, res, next) => {
  try {
    let events = await database.getEventForOrganization(req.user.id);
    console.log(events);
    events = events.filter(event => {
      console.log(event.eventDate);
      return event.eventDate > Date.now();
    });
    res.json({ success: true, events });
  } catch (error) {
    return next(error);
  }
});

router.get("/conducted-events", async (req, res) => {
  try {
    let events = await database.getEventForOrganization(req.user.id);
    events = events.filter(event => event.eventDate < Date.now());
    res.json({ success: true, events });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
