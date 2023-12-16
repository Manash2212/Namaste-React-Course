import React from "react";
import RestaurentCard from "./RestaurentCard";
import ResData from "../utils/Data.json";

const Body = () => {
  const resNames = ResData[0].card.card.info.name;
  // console.log(resNames);
  // console.log(ResData);
  // console.log(ResData[5].card.card.info.name);
  return (
    <div className="main-res-container">
      <div className="search"> Search</div>
      <button
        className="filter-btn"
        onClick={() => {
          ResData = ResData.filter((res) => {
            res.card.card.info.avgRating >= 4;
          });
          console.log(ResData);
        }}
      >
        TopRated Restaurent
      </button>
      <div className="res-container">
        {ResData.map((restaurent) => (
          <RestaurentCard
            key={restaurent?.card.card.info.id}
            resData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
