import react, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    if (!resId) return;

    getRestaurantPage();
  }, [resId]);

  const getRestaurantPage = async () => {
    try {
      const [restaurantResponse, menuResponse] = await Promise.all([
        fetch(`http://localhost:8080/api/restaurants/${resId}`),
        fetch(`http://localhost:8080/api/menu/${resId}`),
      ]);

      if (!restaurantResponse.ok) {
        throw new Error("Failed to fetch restaurant");
      }
      if (!menuResponse.ok) {
        throw new Error("Failed to fetch menu");
      }

      const restaurantJson = await restaurantResponse.json();
      const menuJson = await menuResponse.json();

      console.log("Restaurant data:", restaurantJson);
      console.log("Menu data:", menuJson);

      setRestaurant(restaurantJson.restaurant);
      setMenu(menuJson.menu);

    } catch (error) {
      console.error("Error fetching the restaurant menu data:", error);
    }
  };
  return {restaurant, menu};
};

export default useRestaurantMenu;
