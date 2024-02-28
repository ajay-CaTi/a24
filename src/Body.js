import { useEffect, useState } from "react";
// import { restaurants } from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  //  FILTER BUTTON

  let handleClick = (e) => {
    e.preventDefault();
    filteredList = listOfRestaurants.filter((val, i) => {
      return val.info.avgRating > 4.4;
    });
    console.log(filteredList);
    console.log(listOfRestaurants, "listOfRestaurants");
    // setListOfRestaurants(filteredList);
    setFilterRestaurants(filteredList);
  };

  let url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999";

  // DATA FETCH  USEEFFECT

  useEffect(() => {
    fetchData();
  }, []);

  // DATA FETCH function

  let fetchData = async () => {
    let filterData = await fetch(url);
    let json = await filterData.json();
    console.log(json);
    let { restaurants } =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

    setListOfRestaurants(restaurants);
    setFilterRestaurants(restaurants);
  };

  // SEARCH FUNCTIONALITY

  let handleSearch = (e) => {
    e.preventDefault();
    console.log(listOfRestaurants, "listOfRestaurants");
    let filterRestaurant = listOfRestaurants.filter((val, i) => {
      console.log(searchText);

      return val.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filterRestaurant);
    // setListOfRestaurants(filterRestaurant);
    setFilterRestaurants(filterRestaurant);
  };

  console.log("body rendered each time when ever change in state variable");

  // CONDITONAL RENDERING
  if (listOfRestaurants.length === 0) {
    return <ShimmerUi />;
  }
  console.log(listOfRestaurants);

  return (
    <div className="body">
      <div className="search">
        {/* FILTER BUTTON  */}
        <button
          className="btn"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Filter
        </button>
        <form className="form">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            placeholder="Search here..."
            id=""
          />
          <button
            onClick={(e) => {
              handleSearch(e);
            }}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="res_container">
        {filterRestaurants.map((val) => {
          return (
            <RestaurantCard
              key={val.info.id}
              id={val.info.id}
              cloudinaryImageId={val.info.cloudinaryImageId}
              title={val.info.name}
              costForTwo={val.info.costForTwo}
              cuisines={val.info.cuisines}
              ratings={val.info.avgRating}
              delTime={val.info.sla}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
