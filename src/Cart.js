import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const [datas, setDatas] = useState([]);
  let dispatch = useDispatch();
  const data = useSelector((store) => store.cart.items);
  console.log(data);
  useEffect(() => {
    setDatas(data);
  }, [data]);

  let img_Url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  let handleClearCart = () => {
    dispatch(clearCart());
  };

  if (data.length <= 0) {
    return <h1 className="text-center font-bold">Cart is Empty</h1>;
  }

  return (
    <div className="text-center">
      <h1 className="text-center font-bold">Cart</h1>
      <button
        className="bg-red-300 px-1 rounded-md m-2 hover:bg-red-400 transition-bg"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      <div className="">
        {datas &&
          datas.map((val) => {
            return (
              <div key={val.id} className="w-10/12 m-auto bg-blue-100">
                <h1>{val.name}</h1>
                <p>{val.price && "₹" + val.price / 100}</p>
                <p>{val.description}</p>
                <p>
                  InStock - {val.inStock ? "☑️" : "X"} IsVeg -{" "}
                  {val.isVeg ? "☑️" : "X"}
                </p>
                <img
                  src={val.imageId && img_Url + val.imageId}
                  alt={val.name}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
