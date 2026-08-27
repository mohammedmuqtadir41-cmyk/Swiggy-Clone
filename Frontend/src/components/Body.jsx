import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { Shimmer } from "./RestaurantSkeleton";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import HotelListContext from "../Utils/HotelListContext";

const Body = () => {
  const { hotelList, setHotelList, allItems, setAllItems } =
    useContext(HotelListContext);

  const DiscountRestaurantCard = withDiscountLabel(RestaurantCard);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/restaurants`);
    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }

    const data = await response.json();

    setHotelList(data.restaurants);
    setAllItems(data.restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  } finally {
    setLoading(false);
  }
};

  if (loading) {
  return <Shimmer />;
}

if (hotelList.length === 0) {
  return (
    <div className="empty-state">
      <h2>No restaurants found</h2>
      <p>Try searching for a different restaurant.</p>
    </div>
  );
}

  return (
    <div className="body">
      <div className="res-container">
        {hotelList.map((resObj) => {
          return (
            <Link
              className="res-link"
              to={`/restaurant/${resObj?.restaurantId}`}
              key={resObj?.restaurantId}
            >
              {resObj.offer ? (
                <DiscountRestaurantCard resDetail={resObj} />
              ) : (
                <RestaurantCard resDetail={resObj} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
