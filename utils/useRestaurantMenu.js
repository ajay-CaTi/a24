import React, { useEffect, useState } from "react";
import { restaurant_Url } from "./data";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState([]);
  const [jData, setJData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  let fetchMenu = async () => {
    let data = await fetch(restaurant_Url + id);
    let json = await data.json();
    console.log(restaurant_Url + id);

    let unFilterData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
      json?.data?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR.cards;

    let category = unFilterData?.filter((val) => {
      return (
        val.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
    console.log(category);

    setJData(category);

    setResInfo(
      json?.data?.cards[0]?.card?.card?.info ||
        json?.data?.cards[1]?.card?.card?.info ||
        json?.data?.cards[2]?.card?.card?.info ||
        json?.data?.cards[3]?.card?.card?.info
    );
  };

  return { resInfo, jData };
};

export default useRestaurantMenu;
