const express = require("express");
const {
  AllProfiles,
  MyProfile,
  IndividualProfile,
} = require("../controller/ProfileController");
const protect = require("../middleware/auth");
const router = express.Router();

//get routes
router.get("/all", protect, AllProfiles);
router.get("/all/:id", protect, IndividualProfile);
router.get("/MyProfile", protect, MyProfile);

module.exports = router;
