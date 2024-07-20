const User = require("../models/UserModel");
const Reviews = require("../models/ReviewModel");

const addreview = async (req, res) => {
  try {
    const { taskworker, rating } = req.body;
    const _id = req.user;
    const user = await User.findById(_id);
    const review = await Reviews.create({
      taskprovider: user.fullname,
      taskworker,
      rating,
    });
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).send("something wrong");
  }
};

const devReview = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Reviews.find({ taskworker: id.toString() });
    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).send("something went wrong");
  }
};

const Myreview = async (req, res) => {
  try {
    const review = await Reviews.find({ taskworker: req.user.toString() });
    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).send("something went wrong");
  }
};

module.exports = { addreview, devReview, Myreview };
