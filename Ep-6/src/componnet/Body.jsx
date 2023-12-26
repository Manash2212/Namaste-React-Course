import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import ResData from "../utils/Data.json";

const Body = () => {
  let [ListOfRestaurent, setListOfRestaurent] = useState(ResData);

  useEffect(() => {
    fetchData();
    console.log("This is side UseEffect here");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4410844&lng=88.4464452&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="main-res-container">
      <div className="search"> Search</div>
      <button
        className="filter-btn"
        onClick={() => {
          const filterdList = ListOfRestaurent.filter(
            (res) => res.card.info.avgRatingString >= 4
          );
          setListOfRestaurent(filterdList);
        }}
      >
        TopRated Restaurent
      </button>
      <div className="res-container">
        {ListOfRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent?.card.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
