import React from "react";
import { img_Url } from "../utils/data";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  let { info } = data;

  const handleItems = (info) => {
    // dispatch action
    dispatch(addItems(info));
    // behind the scene {payload:"milk cake"} added to reduces object inside cartSlice
  };

  return (
    <div>
      {
        <div
          key={info.id}
          className="flex justify-between m-1 border-2 border-black-400"
        >
          <div className="w-10/12 m-2">
            <h1 className="font-bold">{info?.name}</h1>
            <span className="font-bold">
              ₹ {info?.price / 100 || info?.defaultPrice / 100}
            </span>{" "}
            <br />
            <span>
              {info?.description &&
                (info?.description.length <= 130
                  ? info?.description
                  : info?.description.slice(0, 125) + "...")}
            </span>
          </div>
          <div className="w-2/12 text-center relative border-2 border-red-400 ">
            {info.imageId && (
              <img
                className="rounded-md absolute "
                width={"100px"}
                height={"100px"}
                src={img_Url + info.imageId}
                alt={info.name}
              />
            )}
            <button
              onClick={() => handleItems(info)}
              className="bg-white absolute bottom-3 right-6 px-1 rounded-md hover:shadow-lg"
            >
              Add+
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default ItemList;
