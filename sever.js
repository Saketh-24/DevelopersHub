const express = require("express");
const app = express();
const dbConnection = require("./config/db");
const UserRoutes = require("./routes/UserRoutes");
const ProfileRoutes = require("./routes/ProfileRoutes");
const ReviewRoutes = require("./routes/ReviewRoutes");

// connecting database
dbConnection();

//middleware
app.use(cors());
app.use(express.json()); // json body parser

//routes
app.use("/api/user", UserRoutes); // login and register
app.use("/api/Profiles", ProfileRoutes); // display profiles
app.use("/api/review", ReviewRoutes); // add and view reviews

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
