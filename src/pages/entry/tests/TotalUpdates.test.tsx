import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OrderDetailsProvider } from "../../../context/OrderDetails";
import Options from "../Options";

describe("Subtotal Options Scoops and toppings", () => {
  test("update the scoops Subtotal when scoops change", async () => {
    render(<Options optionType="scoops" />, {
      wrapper: OrderDetailsProvider,
    });

    const scoopsSubtotal = screen.getByText("Scoops total: $", {
      exact: false,
    });

    expect(scoopsSubtotal).toHaveTextContent("0.00");

    // Vanilla

    const vanillaInput = await screen.findByLabelText("Vanillascoop");

    userEvent.clear(vanillaInput);

    userEvent.type(vanillaInput, "1");

    expect(scoopsSubtotal).toHaveTextContent("2.00");

    //Chocolate

    // const chocolateInput = await screen.findByRole("spinbutton", {
    //   name: "Chocolate",
    // });
    const chocolateInput = await screen.findByLabelText("Chocolatescoop");

    userEvent.clear(chocolateInput);

    userEvent.type(chocolateInput, "2");

    expect(scoopsSubtotal).toHaveTextContent("6.00");
  });
});
