const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../utilities/authenticate");
const userType = require("../../utilities/userType");
const User = require("../../models/user");
const database = require("../../services/database");
const Events = require("../../models/events");

router.use(isLoggedIn);
router.use(userType.isStudent);

router.get("/details", (req, res) => {
  res.json({ success: true, user: req.user });
});

router.get("/registered-events", async (req, res) => {
  let events = await Events.find(
    {
      "registeredUsers.id": req.user.id
    },
    {
      registeredUsers: 0,
      registeredCount: 0
    }
  );
  events = events.filter(event => event.eventDate > Date.now());
  res.json({ success: true, events });
});

router.get("/attended-events", async (req, res) => {
  let events = await database.getEventForUsers(req.body.id);
  events = events.filter(event => event.eventDate < Date.now());
  res.json({ success: true, events });
});

module.exports = router;
