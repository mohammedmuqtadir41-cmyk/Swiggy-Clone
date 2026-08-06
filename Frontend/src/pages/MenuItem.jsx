import { imgBaseURL } from "../Utils/constants";

const MenuItem = ({ details }) => {
  // console.log(details);

  //   console.log("details aagai", details);
  const { description, finalPrice, imageId, isVeg, name, price, ratings } =
    details;
  const rawPrice = details?.price || details?.finalPrice;
  const displayPrice = rawPrice / 100;
  const rating = ratings?.aggregatedRating?.rating;
  const ratingCount =
    ratings?.aggregatedRating?.ratingCount ||
    ratings?.aggregatedRating?.ratingCountV2;

  return (
    <div className="menu-item-card">
      <div className="menu-item-info">
        <h3 className="menu-item-name">{details?.name}</h3>
        {displayPrice > 0 && ( 
        <p className="menu-item-price">₹{displayPrice}</p>
)}
        {rating && (
          <p className="menu-item-rating">
            <span className="star">⭐</span> {rating} ({ratingCount ? `(${ratingCount})` : ""})
          </p>
        )}
        <p className="menu-item-desc">{description}</p>
      </div>
      <div className="menu-item-media">
        {imageId ? (
          <img
            src={imgBaseURL + imageId}
            alt={name}
            className="menu-item-img"
          />
        ) : (
          <div className="menu-item-img-placeholder"></div>
        )}
        <button className="add-to-cart-btn">ADD</button>
      </div>
    </div>
  );
};

export default MenuItem;
