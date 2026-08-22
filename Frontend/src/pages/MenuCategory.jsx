import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuCategory = ({ categoryInfo }) => {
  const { title, items } = categoryInfo;

  const [isOpen, setIsOpen] = useState(false)

  function toggleBody() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="category-accordian">
      <div className="category-header" onClick={toggleBody}>
        <h3>
          {title} ({items.length})
        </h3>
        <span className={`chevron ${isOpen ? "open" : ""}`}>▼</span>
      </div>

      {isOpen && (
        <div className="category-body">
          <h2>{categoryInfo.title}</h2>

          {items.map((item) => (
            <MenuItem details={item} key={item._id} />
          ))}
        </div>
      ) }
        <div className="category-divider"></div>
      
    </div>
  );
};

export default MenuCategory;
