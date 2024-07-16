const express = require("express");
const app = express();
const dbConnection = require("./config/db");
const UserRoutes = require("./routes/UserRoutes");
const ProfileRoutes = require("./routes/ProfileRoutes");

// connecting database
dbConnection();

//middleware
app.use(express.json()); // json body parser

//routes
app.use("/api/user", UserRoutes); // login and register
app.use("/api/Profiles", ProfileRoutes); // display profiles

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
