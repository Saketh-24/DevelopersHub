const express = require("express");
const AllProfiles = require("../controller/ProfileController");
const protect = require("../middleware/auth");
const router = express.Router();

router.get("/", protect, AllProfiles);

module.exports = router;
