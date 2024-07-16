const express = require("express");
const AllProfiles = require("../controller/ProfileController");
const router = express.Router();

router.get("/", AllProfiles);

module.exports = router;
