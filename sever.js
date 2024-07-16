const express = require("express");
const app = express();
const dbConnection = require("./config/db");

// connecting database
dbConnection();

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
