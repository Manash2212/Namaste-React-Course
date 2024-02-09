import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Header from "./componnet/Header";
import Footer from "./componnet/Footer";
import Body from "./componnet/Body";
import Contactus from "./componnet/Contactus";
import About from "./componnet/About";
import Error from "./componnet/Error";
import RestaurentMenu from "./componnet/RestaurentMenu";
import Grocery from "./componnet/Grocery";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contactus /> },
      { path: "/grocery", element: <Grocery /> },
      { path: "/restaurentmenu/:resid", element: <RestaurentMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);

export default App;
