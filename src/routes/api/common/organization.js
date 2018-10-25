const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../../utilities/authenticate");
const database = require("../../../services/database");

router.use(isLoggedIn);

router.get("/:chapterId", async (req, res, next) => {
  try {
    let organization = await database.getOrganizationById(req.params.chapterId);
    res.json({ success: true, organization });
  } catch (error) {
    return next(error);
  }
});

router.get("/events/:organizationId", async (req, res, next) => {
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

module.exports = router;
