import { imgBaseURL } from "../Utils/constants";

const RestaurantCard = ({ resDetail }) => {
  const {
    // resName,
    // cuisine,
    name,
    cuisines,
    avgRating,
    // deliveryTime,
    sla,
    costForTwo,
    // imgId,
    // location,
    cloudinaryImageId,
    areaName,
  } = resDetail;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt={name}
          // src={
          //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          //   imgId
          // }
          src={`${imgBaseURL}${cloudinaryImageId}`}
          loading="lazy"
        />
      </div>

      {/* <h3 className="res-title">{resName}</h3>

      <h4 className="res-cuisine">
        {cuisine.join(", ")}
      </h4> */}
      <h3 className="res-title">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <h4 className="res-rating">⭐ {avgRating} Stars</h4>

      {/* <h4>{deliveryTime} mins</h4> */}
      <h4>
        {sla.deliveryTime} mins | {costForTwo}
      </h4>

      {/* <h4>{costForTwo}</h4> */}

      {/* <h4 className="res-address">
        {location}
      </h4> */}
      <h4>📍 {areaName}</h4>
    </div>
  );
};

export const withDiscountLabel = (WrappedComponent) => {
  return function withDiscountLabel({resDetail, ...props}) {
    const {header = "" , subHeader = ""} = resDetail?.aggregatedDiscountInfoV3 || {};
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
    )

  };
};

export default RestaurantCard;
