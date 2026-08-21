const Menu = require("../models/menu.model");

const getRestaurantMenu = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    const menu = await Menu.findOne({ restaurantId });

    if (!menu) {
      return res.status(404).json({
        success: false,
        message: "Menu not found",
      });
    }

    res.status(200).json({
      success: true,
      menu,
    });
  } catch (error) {
    console.error("Error fetching menu:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch menu",
    });
  }
};

module.exports = {
  getRestaurantMenu,
};