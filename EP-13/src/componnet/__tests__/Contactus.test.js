import { render, screen } from "@testing-library/react";
import Contactus from "../Contactus";
import "@testing-library/jest-dom";

describe("First Testing in Contact Us Page", () => {
  it("should Contact us page loadig or not..!", () => {
    // render Something
    render(<Contactus />);

    // Querying Something
    const button = screen.getByText("Submit");

    // Assertion or Assert Somthing
    expect(button).toBeInTheDocument();

    //toBeInTheDocument()-> THis is function will findout whether my heading is inside the documnet or not! which is rendering.
  });

  it("Should check there is any heading Present or Not..!", () => {
    render(<Contactus />);

    const heading = screen.getByRole("heading");

    // Assertion

    expect(heading).toBeInTheDocument();
  });

  it("Should check there is Submit text written in the Document", () => {
    render(<Contactus />);

    const checkSubmit = screen.getByText("Submit");

    expect(checkSubmit).toBeInTheDocument();
  });
});
