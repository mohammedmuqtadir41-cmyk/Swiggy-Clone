import RestaurantInfo from "./RestaurantInfo";
import useRestaurantMenu from "./useRestaurantMenu";
import { useParams } from "react-router";
import MenuCategory from "./MenuCategory";
import { useEffect, useState } from "react";

const RestaurantPage = () => {
  const { resId } = useParams();

  const {
    restaurantInfo: restaurant,
    menu,
    menuLoading,
    menuError,
  } = useRestaurantMenu(resId);

  const [loadingIndex, setLoadingIndex] = useState(0);

  const phrases = [
    "Fetching delicious options...",
    "Reading the chef's secret menu...",
    "Warming up the kitchen...",
    "Structuring spice levels...",
  ];

  useEffect(() => {
    if (!menuLoading) return;

    const interval = setInterval(() => {
      setLoadingIndex((prev) => (prev + 1) % phrases.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [menuLoading]);

  // Restaurant itself is still loading
  if (restaurant === null) {
    return (
      <div className="swiggy-loader-container">
        <div className="swiggy-loader-emoji">🍔</div>
        <div className="swiggy-loader-text">
          {phrases[loadingIndex]}
        </div>
      </div>
    );
  }

  return (
    <div className="restaurant-page">
      <RestaurantInfo restaurant={restaurant} />

      {/* Menu is still loading */}
      {menuLoading && (
        <div className="swiggy-loader-container">
          <div className="swiggy-loader-emoji">🍔</div>
          <div className="swiggy-loader-text">
            {phrases[loadingIndex]}
          </div>
        </div>
      )}

      {/* Menu is unavailable */}
      {!menuLoading && menuError === "MENU_NOT_AVAILABLE" && (
        <div className="menu-coming-soon">
          <div className="menu-coming-soon-icon">🍽️</div>

          <h2>Menu Coming Soon</h2>

          <p>
            We're still preparing the menu for this restaurant.
            Please check back soon.
          </p>
        </div>
      )}

      {/* Unexpected menu error */}
      {!menuLoading && menuError === "GENERAL_ERROR" && (
        <div className="menu-coming-soon">
          <div className="menu-coming-soon-icon">⚠️</div>

          <h2>Menu Unavailable</h2>

          <p>
            We couldn't load this restaurant's menu right now.
            Please try again later.
          </p>
        </div>
      )}

      {/* Menu successfully loaded */}
      {!menuLoading && !menuError && menu && (
        <div className="restaurant-menu">
          {menu.categories?.map((category) => (
            <MenuCategory
              key={category._id}
              categoryInfo={category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;