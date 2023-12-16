import React from "react";
import ReactDOM from "react-dom/client";
import img from "./assets/img-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 🔰 Assingnment-1

// 🔆 A Nested header Element using React.createElement
const Header = React.createElement(
  "div",
  { className: "title" },
  React.createElement(
    "h1",
    { className: "child-1" },
    "Creating h1 tag Using Core React"
  ),
  React.createElement(
    "h2",
    { className: "child-2" },
    "Creating h2 tag Using Core React"
  ),
  React.createElement(
    "h3",
    { className: "child-3" },
    "Creating h3 tag Using Core React"
  )
);
// 🔆 A Nested header Element using JSX
const Header2 = (
  <div className="title">
    <h1>This is h1 from JSX</h1>
    <h2>This is h1 from JSX</h2>
    <h3>This is h1 from JSX</h3>
  </div>
);

// 🔆 For Passing this Attribute in to the JSX functional Component.
const AddAttribute = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque architecto
    quibusdam sapiente ipsum consequatur repellat ea odit porro doloremque
    commodi provident obcaecati autem, eveniet vero voluptatem at, rerum
    doloribus nostrum?
  </p>
);

// 🔆 A Nested header Functional Component using JSX
const Header3 = () => (
  <div className="title">
    <h1>This is h1 from Functional Component</h1>
    <AddAttribute />
    <h2>This is h1 from Functional Component</h2>
    <h3>This is h1 from Functional Component</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
// root.render(Header3());

// 🔰 Assingnment-2

// 🔆 Create a Header Component from scratch using Functional Components with JSX

const HeaderMian = () => (
  <div className="main-header">
    <img src={img} alt="" width={"150px"} height={"80px"}></img>
    <FontAwesomeIcon icon="fa-solid fa-user" />
  </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root1);

root1.render(HeaderMian());
