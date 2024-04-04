import React, { useEffect } from "react";
import { MENU_API } from "../utils/Constants";

const Contactus = () => {
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(MENU_API);
  //   const json = await data.json();
  //   console.log(json);
  // };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[40px] font-bold">Contact Us</h1>
      <form className="ml-2">
        <input
          type="text"
          placeholder="FirstName"
          className="py-2 px-4 border-2 border-gray-600 rounded-sm mr-2 outline-none "
        />
        <input
          type="text"
          placeholder="LastName"
          className="py-2 px-4  border-2 border-gray-600 rounded-sm outline-none"
        />
        <button className="py-2 px-3 border-2 border-gray-500 rounded-lg bg-gray-200 ml-2 font-bold cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactus;
