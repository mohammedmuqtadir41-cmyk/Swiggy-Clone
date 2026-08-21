const express = require("express");

const { getRestaurantMenu } = require("../controllers/menu.controller");

const router = express.Router();

router.get("/:restaurantId", getRestaurantMenu);

module.exports = router;