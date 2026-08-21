import { imgBaseURL } from "../Utils/constants";

const RestaurantCard = ({ resDetail }) => {
  const { name, cuisines, rating, deliveryTime, costForTwo, image, areaName } =
    resDetail;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt={name}
          src={`${imgBaseURL}${image}`}
          loading="lazy"
        />
      </div>

      <h3 className="res-title">{name}</h3>

      <h4>{cuisines.join(", ")}</h4>

      <h4 className="res-rating">⭐ {rating} Stars</h4>

      <h4>
        {deliveryTime} mins | ₹{costForTwo}
      </h4>

      <h4>📍 {areaName}</h4>
    </div>
  );
};

export const withDiscountLabel = (WrappedComponent) => {
  return function withDiscountLabel({ resDetail, ...props }) {
    const { header = "", subHeader = "" } =
      resDetail?.offer || {};
    const discountText = `${header}${subHeader}`.trim();
    return (
      <div className="res-card-wrapper">
        {/* 2. The discount overlay container container */}
        {discountText && (
          <div className="swiggy-discount-overlay">
            <span className="discount-text-main">{discountText}</span>
          </div>
        )}
        <WrappedComponent resDetail={resDetail} {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
