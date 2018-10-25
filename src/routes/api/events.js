const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../utilities/authenticate");
const userType = require("../../utilities/userType");
const database = require("../../services/database");

router.use(isLoggedIn);

router.get("/event-id/:eventId", async (req, res, next) => {
  try {
    let event = await database.getEventById(req.params.eventId);
    res.json({ success: true, event });
  } catch (error) {
    return next(error);
  }
});

router.post(
  "/:eventId/register",
  userType.isStudent,
  async (req, res, next) => {
    try {
      let result = await database.eventRegister(
        req.user.id,
        req.params.eventId
      );
      res.json({
        success: true,
        message: "Successfully registered for the event"
      });
    } catch (error) {
      return next(error);
    }
  }
);

router.post("/:eventId/comment", userType.isStudent, async (req, res, next) => {
  try {
    let result = await database.addComment(
      req.body,
      req.params.eventId,
      req.user.name
    );
    res.json({ success: true, message: "Comment Added Successfully" });
  } catch (error) {
    return next(error);
  }
});

router.get("/:eventId/registered-users", async (req, res) => {
  try {
    if (req.user.role === "student") {
      throw new Error("Cannot be accessed by student!");
    }
    let users = await database.getRegisteredUsers(
      req.params.eventId,
      req.user.id
    );
    console.log(users);
    res.json({ success: true, users });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
