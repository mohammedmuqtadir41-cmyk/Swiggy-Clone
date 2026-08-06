import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuCategory = ({ categoryInfo }) => {
  console.log(categoryInfo);
  const { title, itemCards } = categoryInfo;

  const [isOpen, setIsOpen] = useState(false);
  // const [showIndex, setShowIndex] = useState(null);


  function toggleBody() {
    setIsOpen(!isOpen);
  }

  //   const itemCards = categoryInfo.itemCards;
  return (
    <div className="category-accordian">
      <div className="category-header" onClick={toggleBody}>
        <h3>
          {title} ({itemCards.length})
        </h3>
        <span className={`chevron ${isOpen ? "open" : ""}`}>▼</span>
      </div>

      {isOpen && (
        <div className="category-body">
          <h2>{categoryInfo.title}</h2>

          {itemCards.map((item) => (
            <MenuItem details={item.card.info} key={item.card.info.id} />
          ))}
        </div>
      ) }
        <div className="category-divider"></div>
      
    </div>
  );
};

export default MenuCategory;
