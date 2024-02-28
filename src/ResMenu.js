import React, { useEffect, useState } from "react";
import { restaurant_Url } from "../utils/data";
import ShimmerUi from "./ShimmerUi";
// import ResMenuItem from "./ResMenuItem";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  let fetchMenu = async () => {
    let data = await fetch(restaurant_Url + id);
    let json = await data.json();
    console.log(restaurant_Url + id);

    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards ||
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards ||
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards ||
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards ||
        json?.data?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards ||
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards ||
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards ||
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards ||
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards ||
        json?.data?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards ||
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
          ?.card?.itemCards ||
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
          ?.card?.itemCards ||
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
          ?.card?.itemCards ||
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
          ?.card?.itemCards ||
        json?.data?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
          ?.card?.itemCards
    );

    setResInfo(
      json?.data?.cards[0]?.card?.card?.info ||
        json?.data?.cards[1]?.card?.card?.info ||
        json?.data?.cards[2]?.card?.card?.info ||
        json?.data?.cards[3]?.card?.card?.info
    );
  };

  console.log(resMenu);
  console.log(resInfo);

  if (resInfo.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <div>
      <div className="menu">
        <h1>{resInfo.name}</h1>
        <h3>{resInfo.cuisines.join(", ")}</h3>
        <p>₹ {+resInfo.costForTwo / 200}</p>
        <p>{resInfo.sla.deliveryTime}</p>
      </div>
      <div>
        <ul>
          {resMenu.map((val, i) => {
            return (
              <li key={i}>
                {val?.card?.info?.name} -₹
                {val?.card?.info?.price / 100 ||
                  val?.card?.info?.defaultPrice / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResMenu;
