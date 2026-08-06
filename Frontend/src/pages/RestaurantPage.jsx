import RestaurantInfo from "./RestaurantInfo";
import useRestaurantMenu from "./useRestaurantMenu";
import { useParams } from "react-router";
import MenuCategory from "./MenuCategory";
import { useEffect, useState } from "react";

const RestaurantPage = () => {
  const { resId } = useParams();

  const { menu, catagories } = useRestaurantMenu(resId);

  const [loadingIndex, setLoadingIndex] = useState(0);
  const phrases = [
    "Fetching delicious options...",
    "Reading the chef's secret menu...",
    "Warming up the kitchen...",
    "Structuring spice levels...",
  ];

  useEffect(() => {
    if (menu !== null) return;
    const interval = setInterval(() => {
      setLoadingIndex((prev) => (prev + 1) % phrases.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [menu]);

  if (menu === null) {
    return (
      <div className="swiggy-loader-container">
        <div className="swiggy-loader-emoji">🍔</div>
        <div className="swiggy-loader-text">{phrases[loadingIndex]}</div>
      </div>
    );
  }

  return (
    <div className="restaurant-page">
      <RestaurantInfo menu={menu} />
      {catagories.map((category) => {
        console.log(category);
        return (
          <MenuCategory
            key={
              category?.card?.card?.categoryId || category?.card?.card?.title
            }
            categoryInfo={category?.card?.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantPage;
