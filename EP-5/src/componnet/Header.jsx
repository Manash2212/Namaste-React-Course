import React from "react";
import { HeaderLogo } from "../utils/Constants";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
