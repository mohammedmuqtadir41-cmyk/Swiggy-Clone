import react, { useEffect, useState } from "react";
import { MenuAPI } from "../Utils/constants";
import { useParams } from "react-router";

const useRestaurantMenu = (resId) => {
//   const { resId } = useParams();
  const [menu, setMenu] = useState(null);
  const [catagories, setCategories] = useState([]);

  useEffect(() => {
    if(!resId) return;
    getRestaurantPage();
  }, [resId]);

  const getRestaurantPage = async () => {
    try{
    const response = await fetch(MenuAPI + resId);
    const json = await response.json();
    console.log(json);
    setMenu(json);

    const rawCards = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const filteredCategories = rawCards.filter(
      (category) => {
        return (
          category.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) 
    });
        setCategories(filteredCategories);
      }catch (error) {
        console.error("Error fetching the restaurant menu data:", error);
    }
  };
  return {menu, catagories}

};

export default useRestaurantMenu;
