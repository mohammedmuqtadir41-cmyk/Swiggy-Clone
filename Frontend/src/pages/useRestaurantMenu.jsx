import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menu, setMenu] = useState(null);
  const [menuLoading, setMenuLoading] = useState(true);
  const [menuError, setMenuError] = useState(null);

  useEffect(() => {
    if (!resId) return;

    getRestaurantPage();
  }, [resId]);

  const getRestaurantPage = async () => {
    try {
      setRestaurantInfo(null);
      setMenu(null);
      setMenuLoading(true);
      setMenuError(null);

      // Fetch restaurant details
      console.log("Fetching restaurant from backend");

      const restaurantResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/restaurants/${resId}`
      );

      if (!restaurantResponse.ok) {
        throw new Error("Failed to fetch restaurant");
      }

      const restaurantData = await restaurantResponse.json();

      setRestaurantInfo(restaurantData.restaurant);

      // Fetch restaurant menu
      const menuResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/menu/${resId}`
      );

      // 404 means this restaurant does not have
      // a menu stored in our database yet.
      if (menuResponse.status === 404) {
        setMenu(null);
        setMenuError("MENU_NOT_AVAILABLE");
        return;
      }

      if (!menuResponse.ok) {
        throw new Error("Failed to fetch menu");
      }

      const menuData = await menuResponse.json();

      setMenu(menuData.menu);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);

      setMenuError("GENERAL_ERROR");
    } finally {
      setMenuLoading(false);
    }
  };

  return {
    restaurantInfo,
    menu,
    menuLoading,
    menuError,
  };
};

export default useRestaurantMenu;