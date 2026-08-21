import { imgBaseURL } from "../Utils/constants";

const MenuItem = ({ details }) => {
  const { description, image, isVeg, name, price } = details;

  return (
    <div className="menu-item-card">
      <div className="menu-item-info">

        {isVeg ? ( <p className="veg-icon">🟢</p>): (<p className="non-veg-icon">🔴</p>)}

        <h3 className="menu-item-name">{name}</h3>

         <p className="menu-item-price">₹{price}</p>
        
        <p className="menu-item-desc">{description}</p>
      </div>
      <div className="menu-item-media">
        {image ? (
          <img
            src={imgBaseURL + image}
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
