import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);
  // console.log(data);
  const handleClick = () => {
    setShowItem(!showItem);
    // console.log("click");
  };
  return (
    <div>
      {/* Accordion Header */}
      <div className="w-full my-3 hover:shadow-md shadow-sm shadow-gray-400 p-2   ">
        <div
          className="flex justify-between cursor-pointer text-xl  font-semibold py-2"
          onClick={() => handleClick()}
        >
          <span className="font-bold ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔰</span>
        </div>
        {/* Accordion Body  */}
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
