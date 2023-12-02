import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {},
  "This is Manash from Root filesystem"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
