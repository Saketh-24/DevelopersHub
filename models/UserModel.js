const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// hash password before saving to db

UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    user.password = await bcrypt.hash(user.password, 10);
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
