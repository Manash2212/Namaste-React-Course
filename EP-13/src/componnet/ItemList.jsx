import React from "react";
import { RestaurantImg } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils//Redux/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="p-2  bg-gray-100 shadow-sm shadow-gray-300">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="text-left py-5 border-b-2 border-gray-400 flex items-center justify-between gap-10"
        >
          <div className="sec-1 w-9/12">
            {/* <span className="text-xs">🔺</span> */}
            <h2 className="font-semibold">{item?.card?.info?.name}</h2>
            <h2 className="py-0.5">
              {" "}
              ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h2>
            <p className="py-3 text-xs text-slate-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="sec-2 w-3/12">
            <div className="bt absolute">
              <button
                //This is means i'm passing a callback function on onClick event.
                onClick={() => handleAddItem(item)}
                //This is means i'm calling the function right away.
                // onClick={handleAddItem}
                className=" px-2 py-1 bg-black text-white rounded-md hover:shadow-md shadow-white"
              >
                Add+
              </button>
            </div>
            <img
              src={RestaurantImg + item?.card?.info?.imageId}
              alt=""
              className="w-[100px] h-[96px]  object-cover  rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
