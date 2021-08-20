import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import OrderSummary from "../OrderSummary";
import userEvent from "@testing-library/user-event";

describe("Order Summary", () => {
  test("check checkbox actions", () => {
    render(<OrderSummary />);
    const checkboxAgree = screen.getByRole("checkbox");

    const buttonConfirm = screen.getByRole("button", { name: "Confirm Order" });

    expect(checkboxAgree).not.toBeChecked();

    userEvent.click(checkboxAgree);

    expect(buttonConfirm).toBeEnabled();

    userEvent.click(checkboxAgree);

    expect(buttonConfirm).toBeDisabled();

    // expect(linkElement).toBeInTheDocument();
  });

  test("check that popover is not in the dom", () => {
    render(<OrderSummary />);

    const nullElementHovered = screen.queryByTestId("hover");

    expect(nullElementHovered).not.toBeInTheDocument();
  });

  test("check that the hover event makes appear the popover", () => {
    render(<OrderSummary />);

    const nullElementHovered = screen.queryByTestId("hover");
    const termsAndConditios = screen.getByText("Terms and Conditions");

    userEvent.hover(termsAndConditios);

    const elementHovered = screen.getByTestId("hover");

    expect(elementHovered).toBeInTheDocument();
  });
  test("check that the unhover event makes disappear the popover", async () => {
    render(<OrderSummary />);

    const termsAndConditios = screen.getByText("Terms and Conditions");

    userEvent.hover(termsAndConditios);

    const elementHovered = screen.getByTestId("hover");

    expect(elementHovered).toBeInTheDocument();

    userEvent.unhover(termsAndConditios);

    const elementHoveredNullAgain = screen.queryByTestId("hover");

    expect(elementHoveredNullAgain).not.toBeInTheDocument();

    //!   ASYNCHRONUS EXPECT

    // await waitForElementToBeRemoved(() => {
    //   screen.queryByTestId("hover");
    // });
  });
});
