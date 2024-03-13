import React, { useEffect, useState } from "react";
import Body from "./Body";
import { MENU_API } from "../utils/Constants";
import { json } from "react-router-dom";

const Grocery = () => {
  const [resInfo, setResInfo] = useState();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + 744460);
    const json = await data.json();

    // setResInfo(json);
    console.log(json);
  };

  return <div>This is Grocery market</div>;
};

export default Grocery;
