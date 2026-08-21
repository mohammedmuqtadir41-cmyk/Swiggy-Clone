import react, { useEffect, useState } from "react";


const useRestaurantMenu = (resId) => {

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (!resId) return;

    getRestaurantPage();
  }, [resId]);

  const getRestaurantPage = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/restaurants/${resId}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurant");
      }

      const json = await response.json();

      console.log("Restaurant data:", json);

      setRestaurant(json.restaurant);

    } catch (error) {
      console.error("Error fetching the restaurant menu data:", error);
    }
  };
  return {restaurant};
};

export default useRestaurantMenu;
