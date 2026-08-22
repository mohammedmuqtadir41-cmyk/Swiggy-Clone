const Menu = require("../models/menu.model");
const { getSwiggyMenu } = require("../services/swiggyMenu.service");

const getRestaurantMenu = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    // Check database first
    const menu = await Menu.findOne({ restaurantId });

    if (menu) {
      console.log("Menu found in database");

      return res.status(200).json({
        success: true,
        source: "Database",
        menu,
      });
    }

    console.log("Menu not found. Fetching from Swiggy");

    const swiggyMenu = await getSwiggyMenu(restaurantId);

    const savedMenu = await Menu.create({
      restaurantId,
      categories: swiggyMenu.categories,
    });

    console.log(
      "Menu fetched from Swiggy and saved"
    );

    return res.status(200).json({
      success: true,
      source: "Swiggy",
      menu: savedMenu,
    });
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error.response?.data || error.message);

    return res.status(502).json({
      success: false,
      message:  "Restaurant menu is unavailable right now",
      error: error.message,
    });
  }
};

module.exports = {
  getRestaurantMenu,
};
