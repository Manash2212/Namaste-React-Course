import React, { useEffect, useState } from "react";
import { HeaderLogo } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hook/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  // console.log("Header Component is Called");

  useEffect(() => {
    // console.log("Use Effect is called");
  }, [btn]);
  // 1.If there is no dependency Array ==> useEffect call on Every Render.
  // 2.If there is an Epmty dependency Array ==> useEffect call on initial Render.
  // 3.If there is an dependency Array [btn] ==> useEffect call on initial Render and when the dependency [btn] is changed.

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header bg-pink-100 flex items-center justify-between shadow-md ">
      <div className="logo-container w-[80px] h-[80px] ">
        <img className="logo w-full h-full" src={HeaderLogo} alt="Food-logo" />
      </div>
      <div className="nav-items flex items-center justify-between ">
        <ul className="flex items-center justify-between gap-3 mr-2 text-xl">
          <li>Online Status:{onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link className="headerComponents hover:text-blue-500" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="headerComponents hover:text-blue-500"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link className="headerComponents hover:text-blue-500" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="headerComponents hover:text-blue-500"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="login border-2 border-slate-500 w-[78px] h-[36px] px-1 pb-1 text-xl mr-2  hover:text-red-500 rounded-md"
          onClick={() => {
            btn === "Login" ? setBtn("Logout") : setBtn("Login");
          }}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Header;
