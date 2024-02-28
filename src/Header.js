import { useState } from "react";
import logo from "../utils/images/food.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="img">
        <img src={logo} alt="imglogo" />
      </div>
      <div>
        <ul className="ul">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li
            className="spBtn"
            onClick={() =>
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }
          >
            <a href="#" className="spBtn">
              {" "}
              {loginBtn}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
