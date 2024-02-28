import React from "react";

const ResMenuItem = ({ data = [] }) => {
  console.log(data);
  let { name, id, price, ratings, imageId } = data?.card?.info;
  return (
    <div>
      <h1>
        {name} {id}
      </h1>
      <p>{price / 100}</p>
      <p>{ratings.aggregatedRating.rating}</p>
    </div>
  );
};

export default ResMenuItem;
