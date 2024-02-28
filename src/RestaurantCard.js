import { Link } from "react-router-dom";
import { img_Url } from "../utils/data";

const RestaurantCard = ({
  id,
  title,
  cuisines,
  ratings,
  cloudinaryImageId,
  costForTwo,
  delTime,
}) => {
  return (
    <Link className="aLink" to={"/restaurants/" + id}>
      <div className="res_card">
        <img src={img_Url + cloudinaryImageId} alt="imglogo" />
        <h4>{title.length <= 18 ? title : title.slice(0, 18) + "..."}</h4>
        <p>
          {cuisines.join(", ").length <= 25
            ? cuisines.join(", ")
            : cuisines.join(", ").slice(0, 38) + "..."}
        </p>
        <p>{ratings} stars</p>
        <p>{costForTwo}</p>
        <p>{delTime.deliveryTime} minutes</p>
      </div>
    </Link>
  );
};
export default RestaurantCard;
