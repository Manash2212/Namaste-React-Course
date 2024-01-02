import React, { useEffect, useState } from "react";
import { HeaderLogo } from "../utils/Constants";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  console.log("Header Component is Called");

  useEffect(() => {
    console.log("Use Effect is called");
  }, [btn]);
  // 1.If there is no dependency Array ==> useEffect call on Every Render.
  // 2.If there is an Epmty dependency Array ==> useEffect call on initial Render.
  // 3.If there is an dependency Array [btn] ==> useEffect call on initial Render and when the dependency [btn] is changed.

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HeaderLogo} alt="Food-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button
          className="login"
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
