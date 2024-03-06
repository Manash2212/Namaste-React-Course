import React, { useEffect, useState } from "react";
import { MENU_API } from "../Constants";

const useRestaurentMenu = (resid) => {
  // create a useState and initial value is Null. pass the data from setter function
  // and the bottom returning the useState function
  const [resInfo, setInfo] = useState(null);

  // Fetch the Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    setInfo(json);
  };

  return resInfo;
};

export default useRestaurentMenu;
