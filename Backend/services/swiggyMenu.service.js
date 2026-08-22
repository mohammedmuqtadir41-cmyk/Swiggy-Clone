const axios = require("axios");

const MENU_API = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.374638644228302&lng=78.4300148114562&restaurantId=";

const normalizePrice = (item) => {
  const finalPrice = item?.finalPrice;

  if (typeof finalPrice === "number") {
    return finalPrice / 100;
  }

  if (finalPrice?.units) {
    return Number(finalPrice.units);
  }

  if (item?.price) {
    return item.price / 100;
  }

  if (item?.defaultPrice) {
    return item.defaultPrice / 100;
  }

  return 0;
};

const normalizeItem = (item) => {
  return {
    itemId: String(item?.id || ""),
    name: item?.name || "",
    description: item?.description || "",
    price: normalizePrice(item),
    image: item?.imageId || "",
    isVeg:
      item?.isVeg === 1 ||
      item?.itemAttribute?.vegClassifier === "VEG",
    inStock: item?.inStock === 1,
  };
};

const normalizeMenu = (restaurantId, data) => {
  const groupedCard = data?.data?.cards?.find(
    (card) =>
      card?.groupedCard?.cardGroupMap?.REGULAR
  );

  const cards =
    groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = [];

  const extractCategories = (card) => {
    if (!card) return;

    if (card?.itemCards) {
      categories.push({
        title: card.title || "Menu",
        items: card.itemCards.map((itemCard) =>
          normalizeItem(itemCard?.card?.info)
        ),
      });
    }

    if (card?.categories) {
      card.categories.forEach((category) => {
        extractCategories(category);
      });
    }
  };

  cards.forEach((card) => {
    extractCategories(card?.card?.card);
  });

  return {
    restaurantId,
    categories,
  };
};

const getSwiggyMenu = async (restaurantId) => {
  try {
    const url = `${MENU_API}${restaurantId}`;

    console.log("Fetching Swiggy menu:");
    console.log(url);

    const response = await axios.get(url);

    console.log("Swiggy response received");

    return normalizeMenu(
      restaurantId,
      response.data
    );
  } catch (error) {
    console.error(
      "Swiggy API error:",
      error.response?.status,
      error.response?.data || error.message
    );

    throw error;
  }
};

module.exports = {
  getSwiggyMenu,
};