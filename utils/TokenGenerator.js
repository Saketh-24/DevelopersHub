const jwt = require("jsonwebtoken");

// generate token

const TokenGenerate = async (id) => {
  try {
    const token = await jwt.sign({ id }, "saketh", { expiresIn: "4h" });
    return token;
  } catch (error) {
    console.log("error generating token");
  }
};

module.exports = TokenGenerate;
