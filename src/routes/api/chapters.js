const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../../utilities/authenticate");
const database = require("../../../services/database");

router.use(isLoggedIn);

router.get("/chapters", async (req, res, next) => {
  try {
    let chapters = await database.getOrganizations();
    res.json({ success: true, chapters });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
