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

module.exports = { addreview };
