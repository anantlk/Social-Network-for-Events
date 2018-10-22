const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../utilities/authenticate");
const userType = require("../../utilities/userType");
const User = require("../../models/user");
const database = require("../../services/database");
const Events = require("../../models/events");

router.use(isLoggedIn);
router.use(userType.isStudent);

router.get("/details", async (req, res, next) => {
  try {
    let user = await database.getStudent(req.user.id);
    res.json({ success: true, user });
  } catch (error) {
    return next(error);
  }
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

router.post("/add-skill", async (req, res, next) => {
  await database.addSkill(skill);
  res.json({ success: true, message: "Skill added succesfully!" });
});

module.exports = router;
