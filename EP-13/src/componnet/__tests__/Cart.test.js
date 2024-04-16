import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/Redux/appStore";
import "@testing-library/jest-dom";
import RestaurentMenu from "../RestaurentMenu";
import Header from "../Header";
import ShoppingCart from "../ShoppingCart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    // jest.fn(()=> it gives you mock function.
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaurent Menu Component and Check the Perticular Items List..", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordiansHeader = screen.getByText("Snacks (16)");
  fireEvent.click(accordiansHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(16);
});
it("Should Fetch the Add+ button from the Items List.. and Click it to Display the Cart..", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordiansHeader = screen.getByText("Snacks (16)");

  fireEvent.click(accordiansHeader);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Items-1")).toBeInTheDocument();
});
it("Should Adding 2nd Items to the Card", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordiansHeader = screen.getByText("Snacks (16)");

  fireEvent.click(accordiansHeader);
  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Items-2")).toBeInTheDocument();
});

it("Should Check How meny iems are present in the Cart Page", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
          <ShoppingCart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordiansHeader = screen.getByText("Snacks (16)");

  fireEvent.click(accordiansHeader);
  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  expect(screen.getAllByTestId("foodItems").length).toBe(18);
  //   Here Its Showing 18 Because in the Items List there are already present 16 items and in Shopping Cart Page are present 2 items so in total is =18
});
it("Should Check the Cart Page Empty or Not after clicking the Clear All Button.", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
          <ShoppingCart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordiansHeader = screen.getByText("Snacks (16)");

  fireEvent.click(accordiansHeader);

  fireEvent.click(screen.getByRole("button", { name: "Clear All" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(16);
});
it("Should Display the Massege of the Cart Page the...", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
          <ShoppingCart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordiansHeader = screen.getByText("Snacks (16)");

  fireEvent.click(accordiansHeader);

  expect(
    screen.getByText(
      "Oops...! The Cart is Empty Please add something to the cart."
    )
  ).toBeInTheDocument();
});
