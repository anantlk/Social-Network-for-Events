const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../utilities/authenticate");
const userType = require("../../utilities/userType");
const User = require("../../models/user");
const Events = require("../../models/events");

router.use(isLoggedIn);
router.use(userType.isStudent);
router.get("/details", (req, res) => {
  res.json({ user: req.user });
});

router.get("/registered-events", async (req, res) => {
  let events = await Events.find({
    "registeredUsers.id": req.user.id
  });
  let registeredEvents = events.filter(event => event.eventDate > Date.now());
  res.json(registeredEvents);
});

router.get("/attended-events", async (req, res) => {
  let events = await Events.find({
    "registeredUsers.id": req.user.id
  });
  let attendedEvents = events.filter(event => event.eventDate < Date.now());
  res.json(attendedEvents);
});

module.exports = router;
