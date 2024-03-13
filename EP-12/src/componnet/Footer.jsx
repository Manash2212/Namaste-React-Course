import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="company-container">
        <h2>Company</h2>
        <ul>
          <li>About Us</li>
          <li>Team</li>
          <li>Careers</li>
          <li>ESG</li>
          <li>Bug Bounty</li>
        </ul>
      </div>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <ul>
          <li>Help & Support</li>
          <li>Partner with us </li>
          <li>Ride with us</li>
        </ul>
      </div>

      <div className="download-information">
        <img
          className="Apple"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
          alt="Apple-store"
        />
        <img
          className="Google"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
          alt="Play-store"
        />
      </div>
    </div>
  );
};

export default Footer;
