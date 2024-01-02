import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componnet/Header";
import Footer from "./componnet/Footer";
import Body from "./componnet/Body";
import Contactus from "./componnet/Contactus";
import About from "./componnet/About";
import Error from "./componnet/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contactus /> },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);

export default App;
