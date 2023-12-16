import React from "react";
import { RestaurantImg } from "../utils/Constants";

const RestaurentCard = ({ resData }) => {
  const { slaString } = resData?.card.card.info.sla;

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    costForTwo,
    cuisines,
    locality,
    areaName,
  } = resData?.card.card.info;

  return (
    <div className="res-card">
      <div className="res-img">
        <img
          className="card-img"
          src={RestaurantImg + cloudinaryImageId}
          alt=""
        />
      </div>
      <h3>{name}</h3>
      <div className="review-duretion">
        <span>{avgRatingString} star</span>
        <span>{totalRatingsString} Total Review</span>
      </div>
      <div className="price-delivery">
        <h4>{costForTwo}</h4>
        <h4>{slaString}</h4>
      </div>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {locality}, {areaName}
      </h4>
    </div>
  );
};

export default RestaurentCard;
