const express = require("express");
const router = express.Router();
const auth = require("./auth");
const student = require("./student");
const organization = require("./organization");
const events = require("../api/events");
const posts = require("../api/posts");
const getAll = require("./getAll");
router.use("/auth", auth);
router.use("/student", student);
router.use("/organization", organization);
router.use("/events", events);
router.use("/posts", posts);
router.use("/all", getAll);
module.exports = router;
