import React, { Suspense, lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Header from "./componnet/Header";
import Footer from "./componnet/Footer";
import Body from "./componnet/Body";
import Contactus from "./componnet/Contactus";
import About from "./componnet/About";
import Error from "./componnet/Error";
import RestaurentMenu from "./componnet/RestaurentMenu";
import Shimmer from "./componnet/Shimmer";
// import Grocery from "./componnet/Grocery";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";
// import Grocery from "./componnet/ShoppingCart";

const Grocery = lazy(() => import("./componnet/Grocery"));
const ShoppingCart = lazy(() => import("./componnet/ShoppingCart"));
// Here import() is a function, and this function will take the path of Grocery

const App = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make an API call and send UserName and Password
    const data = {
      name: "Manash Halder",
    };

    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <UserContext.Provider value={{ loggedInUser: "Sohom Halder" }}>
            <Header />
          </UserContext.Provider>
          <Outlet />
          {/* <Footer /> */}
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <ShoppingCart />
          </Suspense>
        ),
      },
      { path: "/cart", element: <ShoppingCart /> },
      { path: "/restaurentmenu/:resid", element: <RestaurentMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);

export default App;
