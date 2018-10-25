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

router.get("/organization-id/:organizationId", async (req, res, next) => {
  try {
    let events = await database.getEventForOrganization(
      req.params.organizationId
    );
    console.log(events);
    upcomingEvents = events.filter(event => {
      console.log(event.eventDate);
      return event.eventDate > Date.now();
    });
    conductedEvents = events.filter(event => event.eventDate < Date.now());
    res.json({ success: true, upcomingEvents, conductedEvents });
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

router.get("/popularity/:eventId", async (req, res, next) => {
  let event = await database.getEventById(req.params.eventId);
  let rating = 0;
  event.comments.forEach(comment => {
    console.log(comment);
    rating += comment.rating;
  });
  rating = rating / event.comments.length;
  res.json({ success: true, rating: rating });
});

module.exports = router;
