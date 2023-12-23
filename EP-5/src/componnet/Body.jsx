import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import ResData from "../utils/Data.json";

const Body = () => {
  let [ListOfRestaurent, setListOfRestaurent] = useState(ResData);
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
