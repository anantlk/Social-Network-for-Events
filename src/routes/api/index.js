const express = require("express");
const router = express.Router();
const auth = require("./auth");
const student = require("./student");
const organization = require("./organization");
const events = require("./events");
const posts = require("./posts");
const common = require("./common");
const getAll = require("./getAll");

router.use("/auth", auth);
router.use("/student", student);
router.use("/organization", organization);
router.use("/events", events);
router.use("/posts", posts);
router.use("/all", getAll);
router.use("/common", common);

module.exports = router;
