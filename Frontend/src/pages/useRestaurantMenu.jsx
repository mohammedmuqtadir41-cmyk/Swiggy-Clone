import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] =
    useState(null);

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    if (!resId) return;

    getRestaurantPage();
  }, [resId]);

  const getRestaurantPage = async () => {
    try {
      console.log(
        "Fetching restaurant from backend"
      );

      const restaurantResponse =
        await fetch(
          `http://localhost:8080/api/restaurants/${resId}`
        );

      if (!restaurantResponse.ok) {
        throw new Error(
          "Failed to fetch restaurant"
        );
      }

      const restaurantData =
        await restaurantResponse.json();

      const menuResponse =
        await fetch(
          `http://localhost:8080/api/menu/${resId}`
        );

      if (!menuResponse.ok) {
        throw new Error(
          "Failed to fetch menu"
        );
      }

      const menuData =
        await menuResponse.json();

      setRestaurantInfo(restaurantData.restaurant);

      setMenu(menuData.menu);

    } catch (error) {
      console.error(
        "Error fetching restaurant data:",
        error
      );
    }
  };

  return {
    restaurantInfo,
    menu,
  };
};

export default useRestaurantMenu;