import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import ResData from "../utils/Data.json";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFiltertedRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Renderd");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5867597&lng=88.4149401&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data);
    const json = await data.json();
    console.log(json);
    setListOfRestaurent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFiltertedRestaurent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // Conditional Rendaring

  return ListOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-res-container">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
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
      <button
        className="filter-btn"
        onClick={() => {
          const filterdList = ListOfRestaurent.filter(
            (res) => res.info.avgRatingString >= 4.5
          );
          setFiltertedRestaurent(filterdList);
        }}
      >
        TopRated Restaurent
      </button>
      <div className="res-container">
        {filteredRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent?.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
