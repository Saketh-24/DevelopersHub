const User = require("../models/UserModel");

const AllProfiles = async (req, res) => {
  try {
    const allUsers = await User.find({}, "-password");
    if (!allUsers) {
      return res.status(400).json({ msg: "no users exists" });
    }
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).send("server side error, please try in sometime.");
  }
};

const MyProfile = async (req, res) => {
  const _id = req.user;
  try {
    const MyProfile = await User.findById(_id).select("-password");
    return res.status(201).json(MyProfile);
  } catch (error) {
    return res.status(400).send("failed to get Myprofile");
  }
};

module.exports = { AllProfiles, MyProfile };
