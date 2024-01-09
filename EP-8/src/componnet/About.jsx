import React, { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5867597&lng=88.4149401&restaurantId=10365&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="about-container">
      <h1>This is Namaste React Course Episode - 8</h1>
      <User name={"Manash Halder from Function 💥"} />
      <UserClass name={"Sohom Halder from Class 💥"} />
    </div>
  );
};

export default About;
