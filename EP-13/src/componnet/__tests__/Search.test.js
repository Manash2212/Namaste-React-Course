import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  // i) fetch as same as we fatching data..
  // ii) and the function is also returned Promise as we returning bellow.
  return Promise.resolve({
    // iii) Promise resolved with a Json
    json: () => {
      // iv)json again a function that also returns a promise.resolved.
      return Promise.resolve(MOCK_DATA); //Here we are passing a mock data .
    },
  });
});

it("Should search Restaurent List for ... Search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchdInput = screen.getByTestId("searchInput");

  fireEvent.change(searchdInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("Should Filterd Toprated Restaurent List after Clicking Toprated Restaurent Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {
    name: "TopRated Restaurent",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(5);
});
