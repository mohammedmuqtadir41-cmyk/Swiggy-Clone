const express = require("express");
const cors = require("cors");

const app = express();

const connnectToDb = require("./config/db");
const restaurantRoutes = require("../Backend/routes/restaurant.routes");
const menuRoutes = require("../Backend/routes/menu.routes")

app.use(express.json());

require("dotenv").config();

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menu", menuRoutes)

const PORT = 8080;

connnectToDb();

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT} 🚀`);
});
