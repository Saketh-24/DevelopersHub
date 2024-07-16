const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("db connected successfully..");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
