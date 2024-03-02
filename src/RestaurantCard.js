import { useContext } from "react";
import { img_Url } from "../utils/data";
import { UserCon } from "./UserCon";

const RestaurantCard = ({
  title,
  cuisines,
  ratings,
  cloudinaryImageId,
  costForTwo,
  delTime,
}) => {
  let { LoggedUser } = useContext(UserCon);
  return (
    <div className="w-48 h-[360px] p-1 m-1 bg-slate-100 transition-transform hover:delay-75 hover:scale-[0.96] rounded-md hover:bg-pink-100">
      <img
        className="h-48 w-44 m-1 rounded-md"
        src={img_Url + cloudinaryImageId}
        alt="imglogo"
      />
      <div className="m-1">
        <h4 className="font-bold">
          {title.length <= 18 ? title : title.slice(0, 17) + "..."}
        </h4>
        <p>
          {cuisines.join(", ").length <= 25
            ? cuisines.join(", ")
            : cuisines.join(", ").slice(0, 21) + "..."}
        </p>
        <p>
          {ratings} stars {LoggedUser}
        </p>
        <p>{costForTwo}</p>
        <p>{delTime.deliveryTime} minutes</p>
      </div>
    </div>
  );
};

// High order function
// input - ResCard ==> ResCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute  text-white ml-3 mt-2 bg-black p-[3px] rounded-md z-10 ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
