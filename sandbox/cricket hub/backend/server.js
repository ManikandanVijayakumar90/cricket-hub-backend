const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
require("dotenv").config();
const playerRoutes = require("./routes/playerRoutes");
const teamRoutes = require("./routes/teamRoutes");
const matchRoutes = require("./routes/matchRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/players", playerRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/matches", matchRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Cricet Hub API is Running",
  });
});

const port = 5000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
