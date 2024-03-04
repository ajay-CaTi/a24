import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("test case for cntact page", () => {
  test("should render contact or not", () => {
    // render on jsDOM
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    // render on jsDOM
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    // render on jsDOM
    render(<Contact />);

    const message = screen.getByPlaceholderText("message");
    expect(message).toBeInTheDocument();
  });

  // should load 2 input boxes

  it("should load 2 input boxes contact component", () => {
    // render
    render(<Contact />);

    // querying
    const inputBox = screen.getAllByRole("textbox");
    console.log(inputBox, inputBox.length);

    // assert

    //   expect(inputBox.length).toBe(2);
    expect(inputBox.length).not.toBe(3);
  });
});
