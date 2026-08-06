import { useContext, useState } from "react";
import { Link } from "react-router";
import { LogoURL } from "../Utils/constants";
import HotelListContext from "../Utils/HotelListContext";

const Header = () => {
  const { hotelList, setHotelList, allItems } = useContext(HotelListContext);

  const [fitlerToggle, setFilterToggle] = useState(false);

  function setFilter() {
    // console.log("button was clicked");

    if (!fitlerToggle) {
      const filteredArray = hotelList.filter(
        (restaurant) => restaurant.info.avgRating > 4.1,
      );

      setHotelList(filteredArray);
      setFilterToggle(true);
    } else {
      setFilterToggle(false);
      setHotelList(allItems);
    }
  }

  return (
    <header className="header">
      <div id="logo">
        <Link to={"/"}>
          <img src={LogoURL} />
        </Link>
      </div>

      <div id="search-bar">
        <input type="text"
        onChange={(e) => {
          const filterList = allItems.filter((restaurant) => {
            if(restaurant.info.name.toLowerCase().includes(e.target.value) === true){
              return true;
            } else {
              return false;
            }
          })
          setHotelList(filterList);
        }} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <button onClick={setFilter} className= {`swiggy-filter-btn ${fitlerToggle ? "active" : ""}`}>{fitlerToggle ? "Show All Restaurants " : " Top Rated Restaurants"}</button>
          </li>
          {/* <li>{data.name}</li> */}
          <li>
            {" "}
            <Link to={"/offers"}>Offers</Link>
          </li>
          <li>
            {" "}
            <Link to={"/help"}>Help</Link>
          </li>
          <li>
            {" "}
            <Link to={"/signin"}>Sign in</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            {" "}
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
