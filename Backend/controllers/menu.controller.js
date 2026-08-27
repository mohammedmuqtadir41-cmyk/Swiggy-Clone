const Menu = require("../models/menu.model");

const getRestaurantMenu = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    // Check database for the restaurant menu
    const menu = await Menu.findOne({ restaurantId });

    // Menu does not exist in our database
    if (!menu) {
      return res.status(404).json({
        success: false,
        message: "Menu coming soon",
      });
    }

    // Menu found in database
    console.log("Menu found in database");

    return res.status(200).json({
      success: true,
      source: "Database",
      menu,
    });
  } catch (error) {
    console.error("Failed to fetch restaurant menu:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch restaurant menu",
    });
  }
};

module.exports = {
  getRestaurantMenu,
};
