const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  taskprovider: {
    type: String,
    required: true,
  },
  taskworker: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

const Reviews = mongoose.model("Review", modelSchema);

module.exports = Reviews;
