import { imgBaseURL } from "../Utils/constants";

const RestaurantInfo = ({ menu }) => {
const info = menu?.data?.cards[2]?.card?.card?.info || {};

  const {
    name,
    avgRatingString,
    costForTwo,
    totalRatingsString,
    cloudinaryImageId,
    cuisines,
  } = info;

const displayCost = costForTwo || (costForTwo ? `₹${costForTwo / 100} for two` : "");
  return (
    <div className="restaurant-header">
      <div className="restaurant-header-text">
        <h1 className="restaurant-title">{name}</h1>
        <p className="restaurant-cuisines">{cuisines?.join(", ")}</p>
        
        <div className="restaurant-meta">
          <div className="restaurant-item-rating">
            <span>⭐ {avgRatingString}</span>
            <span>{totalRatingsString}</span>
          </div>
          <div className="restaurant-item-divider">|</div>
          <div className="meta-item">
            <span>{displayCost}</span>
          </div>
        </div>
      </div>
      
      {cloudinaryImageId && ( 
      <div className="restaurant-header-img-wrapper">
        <img 
          className="restaurant-hero-img" 
          src={imgBaseURL + cloudinaryImageId} 
          alt={name} 
        />
      </div>
      )}
    </div>
  );
};

export default RestaurantInfo;
