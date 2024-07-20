const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  addreview,
  devReview,
  Myreview,
} = require("../controller/ReviewController");

// router to add review
router.post("/addreview", protect, addreview);
router.get("/:id", protect, devReview);
router.get("/myreviews", protect, Myreview);

module.exports = router;
