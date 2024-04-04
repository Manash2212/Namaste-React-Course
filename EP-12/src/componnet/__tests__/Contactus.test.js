import { render, screen } from "@testing-library/react";
import Contactus from "../Contactus";
import "@testing-library/jest-dom";
test("should Contact us page loadig or not..!", () => {
  render(<Contactus />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();

  //toBeInTheDocument()-> THis is function will findout whether my heading is inside the screen or not?
});
