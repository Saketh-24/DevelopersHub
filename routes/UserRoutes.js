const express = require("express");
const router = express.Router();

// user controllers
const { register, login } = require("../controller/UserController");

// post routes
router.post("/register", register);
router.post("/login", login);

module.exports = router;
