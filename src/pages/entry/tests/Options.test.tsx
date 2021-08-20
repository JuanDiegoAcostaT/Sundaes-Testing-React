import { render, screen } from "@testing-library/react";
import { OrderDetailsProvider } from "../../../context/OrderDetails";

import Options from "../Options";

describe("Mock Service Scoops", () => {
  test("display image for each scoop option from server", async () => {
    render(<Options optionType={"scoops"} />, {
      wrapper: OrderDetailsProvider,
    });

    // const findImages = screen.getAllByRole("img", { name: /scoop$/i });

    //!ASYNCHRONUS
    const findImages = await screen.findAllByRole("img", { name: /scoop$/i });

    //@ts-ignore
    const altImages = findImages.map((image) => image.alt);

    expect(altImages).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
  test("display image for each topping option from server", async () => {
    render(<Options optionType={"toppings"} />, {
      wrapper: OrderDetailsProvider,
    });

    // const findImages = screen.getAllByRole("img", { name: /scoop$/i });

    //!ASYNCHRONUS
    const findImages = await screen.findAllByRole("img", { name: /topping$/i });

    //@ts-ignore
    const altImages = findImages.map((image) => image.alt);

    expect(altImages).toEqual([
      "M&Ms topping",
      "Hot fudge topping",
      "Cherries topping",
    ]);
  });
});
