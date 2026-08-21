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
    console.error("Failed to fetch restuarants", err);

    res.status(500).json({
      success: false,
      msg: "Failed to fetch restuarants",
    });
  }
});

router.get("/:resId", async (req, res) => {
  try {
    const { resId } = req.params;

    const restaurant = await Restaurants.findOne({ restaurantId:resId });

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        msg: "Restaurant not  found",
      });
    }

    res.status(200).json({
      success: true,
      restaurant,
    });
  } catch (err) {
    console.error("Failed to fetch restaurant", err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch restaurant",
    });
  }
});

module.exports = router;
