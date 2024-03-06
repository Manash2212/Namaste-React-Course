import React from "react";
import { RestaurantImg } from "../utils/Constants";

const RestaurentCard = ({ resData }) => {
  const { slaString } = resData?.info.sla;

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    costForTwo,
    cuisines,
    locality,
    areaName,
  } = resData?.info;

  return (
    <div className="res-card w-[285px] min-h-[340px] px-2 py-2 bg-gray-200 rounded-md">
      <div className="res-img object-cover">
        <img
          className="card-img w-full h-[150px] rounded-md shadow-lg"
          src={RestaurantImg + cloudinaryImageId}
          alt=""
        />
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="review-duretion flex justify-between mb-2">
        <span>{avgRatingString} star</span>
        <span>{totalRatingsString} Total Review</span>
      </div>
      <div className="price-delivery flex justify-between mb-2">
        <h4 className="font-medium">{costForTwo}</h4>
        <h4>{slaString}</h4>
      </div>
      <h4 className="font-medium">{cuisines.join(", ")}</h4>
      <h4>
        {locality}, {areaName}
      </h4>
    </div>
  );
};

export default RestaurentCard;
