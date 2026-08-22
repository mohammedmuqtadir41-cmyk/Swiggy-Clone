import { imgBaseURL } from "../Utils/constants";

const RestaurantInfo = ({ restaurant }) => {
  if (!restaurant) return null;

  const {
    name,
    cuisines,
    rating,
    totalRatings,
    costForTwo,
    deliveryTime,
    areaName,
    locality,
    image,
    veg,
    isOpen,
  } = restaurant;

  return (
    <div className="restaurant-header">
      <div className="restaurant-header-text">
        <h1 className="restaurant-title">{name}</h1>

        <p className="restaurant-cuisines">{cuisines?.join(", ")}</p>

        <p className="restaurant-location">
          📍 {areaName}
          {locality ? `, ${locality}` : ""}
        </p>

        <div className="restaurant-meta">
          <div className="meta-item rating">
            <span>⭐ {rating}</span>
            <small>{totalRatings} ratings</small>
          </div>

          <div className="meta-item divider">|</div>

          <div className="meta-item">
            <span>₹{costForTwo} for two</span>
            <small>Cost for two</small>
          </div>

          <div className="meta-item divider">|</div>

          <div className="meta-item">
            <span>{deliveryTime} mins</span>
            <small>Delivery time</small>
          </div>
        </div>

        {!isOpen && <p className="restaurant-closed">Currently closed</p>}

        {veg && <p className="restaurant-veg">🟢 Pure Veg</p>}
      </div>

      {image && (
        <div className="restaurant-header-img-wrapper">
          <img
            className="restaurant-hero-img"
            src={`${imgBaseURL}${image}`}
            alt={name}
          />
        </div>
      )}
    </div>
  );
};

export default RestaurantInfo;
