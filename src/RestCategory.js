import React from "react";
import ItemList from "./ItemList";

const RestCategory = ({ item, showItem, setShowIndex }) => {
  let { itemCards, title } = item?.card?.card;
  console.log(itemCards, title);

  const handleClik = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-10/12 m-auto bg-slate-100 rounded-lg shadow-lg">
        <div
          className="text-center my-4 p-4 flex cursor-pointer justify-between "
          onClick={handleClik}
        >
          <span className="font-bold text-lg">
            {title}({itemCards.length})
          </span>

          <span className="">🔽</span>
        </div>
        <div>
          {showItem &&
            itemCards.map((val) => {
              return <ItemList key={val.card.info.id} data={val.card} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default RestCategory;
