import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  console.log(err.status);
  console.log(err.statusText);
  return (
    <div>
      <h1>Ooops....!</h1>
      <h2>Something Went Wrong</h2>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
