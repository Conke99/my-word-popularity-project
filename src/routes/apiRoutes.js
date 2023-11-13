const express = require("express");
const router = express.Router();
const { getPopularityScore } = require("../controllers/wordController");

// Define the route for getting the popularity score
router.get("/score", getPopularityScore);

module.exports = router;
