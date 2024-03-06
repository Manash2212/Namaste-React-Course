import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import ResData from "../utils/Data.json";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hook/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFiltertedRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Body Renderd");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5280352&lng=88.36590830000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFiltertedRestaurent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // Check user connections is stable or not..!
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Your Internet Connection is Lost</h1>;
  }

  // Conditional Rendaring

  return ListOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-res-container">
      <div className="search flex items-center justify-around mt-3">
        <div className="">
          <input
            type="text"
            className="search-box border-2 border-gray-300 rounded-md mr-2 outline-none px-2 pb-0.2 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-gray-200 rounded-md text-lg font-medium px-2 py-0.2  "
            onClick={() => {
              console.log(`This is Search Item ${searchText}`);

              const filterRest = ListOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFiltertedRestaurent(filterRest);
            }}
          >
            Search
          </button>
        </div>

        {/* Filtering The Restaurent Cards and Update the Ui  */}
        <div className="">
          <button
            className="filter-btn bg-gray-200 px-2 py-1 rounded-md text-lg "
            onClick={() => {
              const filterdList = ListOfRestaurent.filter(
                (res) => res.info.avgRatingString >= 4.5
              );
              setFiltertedRestaurent(filterdList);
            }}
          >
            TopRated Restaurent
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap gap-4 mt-5 items-center">
        {filteredRestaurent.map((restaurent) => (
          <Link
            key={restaurent?.info.id}
            to={`/restaurentmenu/${restaurent?.info.id}`}
          >
            {" "}
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
