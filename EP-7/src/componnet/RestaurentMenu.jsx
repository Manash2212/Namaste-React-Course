import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/Constants";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resid);

    const json = await data.json();
    console.log(json);

    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  const getData = resInfo?.data?.cards[0]?.card?.card?.info;
  const { name, areaName, city, avgRating, costForTwoMessage, cuisines } =
    getData;
  console.log(getData);

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[12]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {areaName}, {city}
      </h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(", ")}</h3>
      {/* <h1>{resInfo?.data?.cards[0]?.card?.card?.info.name}</h1> */}
      <h2>Menu</h2>
      <ul>
        {itemCards.map((res) => {
          console.log(res);
          return (
            <li key={res.card.info.id}>
              {res.card.info.name} - ₹{res.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
