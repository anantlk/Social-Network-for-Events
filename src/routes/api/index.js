const express = require("express");
const router = express.Router();
const auth = require("./auth");
const student = require("./student");
const organization = require("./organization");

router.use("/auth", auth);
router.use("/student", student);
// router.use("/organization", organization);

module.exports = router;
