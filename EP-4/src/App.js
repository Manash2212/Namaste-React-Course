import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componnet/Header";
import Footer from "./componnet/Footer";
import Body from "./componnet/Body";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<App />);
