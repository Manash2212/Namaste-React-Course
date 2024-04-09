import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/Redux/appStore";
import { BrowserRouter } from "react-router-dom";

test("Should render Header component with a Login Button .. ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const loginButton = screen.getByRole("button");
  // or
  //   const loginButton = screen.getByText("Login");

  //   Assertion
  expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with a Button and the button name is exactly login or not .. ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  // Note:- If that component has Multiple button and we want to search some Specific Button,then rules is
  //    Searh the Button ROle and Pass and Extra Parameters also, like:- {name: "Login"}

  //   Assertion
  expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with a Cart items 0.. ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const cartItems = screen.getByText(/0/);
  //   Note :- above this is Call rejex is a sequence of character that define a search pattern, it can used to search, edit or manipulate the text and data.

  //   Assertion
  expect(cartItems).toBeInTheDocument();
});

test("Should render Header component, and should change the Login button to Logout in oneclick ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutEvent = screen.getByRole("button", { name: "Logout" });

  //   Assertion
  expect(logoutEvent).toBeInTheDocument();
});

// Note :- Jest only can understand react and jsx. jest can not understand redux-toolkit, react-router-dom
