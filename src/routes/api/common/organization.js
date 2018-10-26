const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../../utilities/authenticate");
const database = require("../../../services/database");

router.use(isLoggedIn);

router.get("/:organizationId", async (req, res, next) => {
  try {
    let organization = await database.getOrganizationById(
      req.params.organizationId
    );
    res.json({ success: true, organization });
  } catch (error) {
    return next(error);
  }
});

router.get("/:eventId/registered-users", async (req, res) => {
  try {
    let result = [];
    if (req.user.role === "student") {
      throw new Error("Cannot be accessed by student!");
    }
    let users = await database.getRegisteredUsers(
      req.params.eventId,
      req.user.id
    );
    users.forEach(user => {
      let obj = {
        userId: user.userId._id,
        name: user.userId.name,
        attended: user.attended
      };
      result.push(obj);
    });
    users = result;
    console.log(users);
    res.json({ success: true, users });
  } catch (error) {
    return next(error);
  }
});

router.get("/popularity/:organizationId", async (req, res, next) => {
  let events = await database.getAllEvents(req.params.organizationId);
  let rating = 5;
  if (events.length) {
    rating = 0;
    events.forEach(event => {
      tempRating = 0;
      if (event.comments.length) {
        event.comments.forEach(comment => {
          console.log(comment);
          tempRating += comment.rating;
        });
        rating = tempRating / event.comments.length;
      }
      // console.log(tempRating);
      // console.log(rating);
    });
    rating = rating / events.length;
  }
  res.json({ success: true, rating: rating });
});

router.post("/:organizationId/feedback", async (req, res, next) => {
  try {
    if (req.user.id === req.params.organizationId)
      throw new Error("Invalid Request!");
    let organization = await database.postFeedback(
      req.params.organizationId,
      req.user.id,
      req.body
    );
    res.json({ success: true, organization });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
