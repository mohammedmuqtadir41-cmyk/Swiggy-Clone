import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { Shimmer } from "./RestaurantSkeleton";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import HotelListContext from "../Utils/HotelListContext";

const Body = () => {
  const { hotelList, setHotelList, allItems, setAllItems } =
    useContext(HotelListContext);

  const DiscountRestaurantCard = withDiscountLabel(RestaurantCard);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const response = await fetch("http://localhost:8080/api/restaurants");

    if(!response.ok){
      console.log("Failed to fetch restaurants")
    }
    const data = await response.json();


    setHotelList(data.restaurants);
    setAllItems(data.restaurants);
  };

  if (!hotelList || hotelList.length === 0) {
    return <Shimmer />;
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
