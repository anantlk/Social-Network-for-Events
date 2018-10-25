const express = require("express");
const router = express.Router();
// const student = require("./student");
const organization = require("./organization");

// router.use("/student", student);
router.use("/organization", organization);

module.exports = router;
