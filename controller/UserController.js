const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const TokenGenerate = require("../utils/TokenGenerator");

const register = async (req, res) => {
  const { fullname, email, mobile, skills, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).send("User already exists");
    }
    const newUser = await User.create({
      fullname,
      email,
      mobile,
      skills,
      password,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(501).send("something went wrong on server side");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); // findOne gives u an Object, whereas find gives array of Objects
    if (!user) {
      return res.status(401).send("user doesnt exist");
    } else if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("password incorrect");
    } else {
      const token = await TokenGenerate(user._id);
      const payload = {
        fullname: user.fullname,
        email: user.email,
        mobile: user.mobile,
        token: token,
      };
      return res.status(200).json(payload);
    }
  } catch (error) {
    return res.status(501).send("something went wrong on server side");
  }
};

module.exports = { register, login };
