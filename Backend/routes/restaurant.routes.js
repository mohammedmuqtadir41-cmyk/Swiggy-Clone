const express = require("express");
const router = express.Router();

const Restaurants = require("../models/restaurant.model");

router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurants.find();

    res.status(200).json({
        success: true,
        count: restaurants.length,
        restaurants,
    });
  } catch (err) {
    console.error("Failed to fetch restuarants",err);

    res.status(500).json({
        success: false,
        msg: "Failed to fetch restuarants",
    });
  }
});

module.exports = router;