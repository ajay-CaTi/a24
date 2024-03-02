import React, { useState } from "react";
import ShimmerUi from "./ShimmerUi";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCategory from "./RestCategory";

const ResMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  let { id } = useParams();

  let { resInfo, jData } = useRestaurantMenu(id);

  console.log(resInfo, jData);

  // let { itemCards } = jData?.card?.card;
  // console.log(itemCards);

  if (resInfo.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <div>
      <div className="text-center m-2">
        <h1 className="font-bold mb-2">{resInfo.name}</h1>
        <h3>{resInfo.cuisines.join(", ")}</h3>
        <p>₹ {+resInfo.costForTwo / 200}</p>
        <p>{resInfo.sla.deliveryTime}</p>
      </div>
      <div>
        {/* categories accordian */}
        {jData.map((val, index) => {
          return (
            <RestCategory
              key={val?.card?.card?.title}
              item={val}
              showItem={index === showIndex && true}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
