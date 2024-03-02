import { useState } from "react";
import logo from "../utils/images/food.jpg";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import { useContext } from "react";
import { UserCon } from "./UserCon";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  let { LoggedUser } = useContext(UserCon);
  let onlinestatus = useStatus();

  // selector Subscribing
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  console.log(onlinestatus);
  console.log(LoggedUser);
  return (
    <div className="flex justify-between items-center bg-pink-200 rounded-lg shadow-lg lg:bg-pink-100 md:bg-blue-100 sm:bg-slate-100">
      <div className="img">
        <img className="w-20" src={logo} alt="imglogo" />
      </div>
      <div>
        <ul className="flex">
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-2">
            <Link to={"/accordian"}>Accordian</Link>
          </li>
          <li className="px-2">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-2">{LoggedUser}</li>
          <li
            className="px-2 "
            onClick={() =>
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }
          >
            <a href="#" className="">
              {" "}
              {loginBtn}
            </a>
          </li>
          <li className="px-2">{onlinestatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
