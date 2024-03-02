import { useContext, useEffect, useState } from "react";
// import { restaurants } from "../utils/data";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import { url } from "../utils/data";
import { UserCon } from "./UserCon";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  let { LoggedUser, setUserName } = useContext(UserCon);

  const ResCardPromoted = withPromotedLabel(RestaurantCard);

  let onlinestatus = useStatus();
  console.log(onlinestatus);

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

  // online offline

  if (!onlinestatus) {
    return <h1>Looks like Ur internet is broken</h1>;
  }
  if (listOfRestaurants.length === 0) {
    // CONDITONAL RENDERING
    return <ShimmerUi />;
  }
  console.log(listOfRestaurants);

  return (
    <div className="body">
      <div className="text-center flex justify-around m-2">
        {/* FILTER BUTTON  */}
        <button
          className="px-2 py-1 bg-blue-100 rounded-lg"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Filter
        </button>
        <div>
          <input
            className="h-[30px] mx-2 bg-blue-100 rounded-lg px-2"
            type="text"
            name="LoggedUser"
            id=""
            value={LoggedUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <form className="text-center ">
          <input
            className="h-[30px] mx-2 bg-blue-100 rounded-lg px-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            placeholder="Search here..."
            id=""
          />
          <button
            className="px-2 py-1 bg-blue-100 rounded-lg"
            onClick={(e) => {
              handleSearch(e);
            }}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="p-1 flex justify-evenly flex-wrap">
        {filterRestaurants.map((val) => {
          return (
            <Link
              key={val.info.id}
              className="aLink"
              to={"/restaurants/" + val.info.id}
            >
              {val.info.avgRating > 4.4 ? (
                <ResCardPromoted
                  id={val.info.id}
                  cloudinaryImageId={val.info.cloudinaryImageId}
                  title={val.info.name}
                  costForTwo={val.info.costForTwo}
                  cuisines={val.info.cuisines}
                  ratings={val.info.avgRating}
                  delTime={val.info.sla}
                />
              ) : (
                <RestaurantCard
                  id={val.info.id}
                  cloudinaryImageId={val.info.cloudinaryImageId}
                  title={val.info.name}
                  costForTwo={val.info.costForTwo}
                  cuisines={val.info.cuisines}
                  ratings={val.info.avgRating}
                  delTime={val.info.sla}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
