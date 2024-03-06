import React from "react";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/Constants";
import useRestaurentMenu from "../utils/hook/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const { resid } = useParams();

  const resInfo = useRestaurentMenu(resid);
  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  // Details of Restaurent
  const {
    name,
    cuisines,
    costForTwoMessage,
    city,
    avgRating,
    areaName,
    sla,
    totalRatingsString,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;
  console.log(itemCards);

  // Menu Categories API Fetch
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu  py-10 mx-auto w-[50%] ">
      <div className=" my-0   ">
        <div className="about flex items-center justify-between py-5 ">
          <div className="details w-9/12 pl-2">
            <h1 className="text-xl  font-bold py-2">{name}</h1>
            <h3 className="cuisin  text-gray-400 text-sm">
              {" "}
              {cuisines.join(",")}
            </h3>
            <h3 className=" text-gray-400 text-sm">
              {areaName}, {city}
            </h3>
          </div>

          <div className="ratingCon text-gray-400 w-3/12">
            <div className="rate border-2 border-gray-400 rounded-md text-center w-[40%]">
              <h3 className="text-green-600 font-bold">
                <span className="text-sm">⭐</span> {avgRating}
              </h3>
              <span className=" w-[80%]">---</span>
              <h3 className="text-xs font-semibold ">{totalRatingsString}</h3>
            </div>
          </div>
        </div>

        <div className="cupon-price py-3">
          <span className="text-lg font-bold">
            <span className="text-md">🕙</span> {sla.slaString} |{" "}
            {costForTwoMessage}
          </span>
        </div>
        <div className="border-b-2 border-gray-400 border-dotted mx-auto"></div>

        {/* Categories Accordions */}
        {categories.map((category, i) => (
          <RestaurentCategory key={i} data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
