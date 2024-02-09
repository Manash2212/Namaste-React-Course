import React, { useEffect } from "react";
import { MENU_API } from "../utils/Constants";

const Contactus = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    console.log(json);
  };
  return (
    <div>
      <h1>Wellcome...!</h1>
      <p>Please Do not hesitate to contact..</p>
    </div>
  );
};

export default Contactus;
