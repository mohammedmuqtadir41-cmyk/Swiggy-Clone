import RestaurantInfo from "./RestaurantInfo";
import useRestaurantMenu from "./useRestaurantMenu";
import { useParams } from "react-router";
import MenuCategory from "./MenuCategory";
import { useEffect, useState } from "react";

const RestaurantPage = () => {
  const { resId } = useParams();

  const {restaurant, menu} = useRestaurantMenu(resId);

  const [loadingIndex, setLoadingIndex] = useState(0);

  const phrases = [
    "Fetching delicious options...",
    "Reading the chef's secret menu...",
    "Warming up the kitchen...",
    "Structuring spice levels...",
  ];

  useEffect(() => {
    if (restaurant !== null) return;

    const interval = setInterval(() => {
      setLoadingIndex((prev) => (prev + 1) % phrases.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [restaurant]);

  if (restaurant === null || menu === null) {
    return (
      <div className="swiggy-loader-container">
        <div className="swiggy-loader-emoji">🍔</div>
        <div className="swiggy-loader-text">{phrases[loadingIndex]}</div>
      </div>
    );
  }

  return (
    <div className="restaurant-page">
      <RestaurantInfo restaurant={restaurant} />

      <div className="restaurant-menu">
        {menu?.categories?.map((category) => {
          <MenuCategory key={category._id} categoryInfo={category} />
        })}
      </div>
    </div>
  );
};

export default RestaurantPage;
