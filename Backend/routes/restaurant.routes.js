const express = require("express");
const {getRestaurantById, getRestaurants} = require("../controllers/restaurant.controller")


const router = express.Router();


router.get("/", getRestaurants);

router.get("/:resId", getRestaurantById);

module.exports = router;
