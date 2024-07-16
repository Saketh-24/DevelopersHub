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

module.exports = AllProfiles;
