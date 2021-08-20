import OrderEntry from "../OrderEntry";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import { OrderDetailsProvider } from "../../../context/OrderDetails";

describe("error handler for request toppings and scoops", () => {
  //! (only) is for running just one test in the debugging
  //! (skip) is for skip  running just one test in the debugging
  test.only("error handler for request toppings and scoops", async () => {
    server.resetHandlers(
      rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
        res(ctx.status(500));
      }),
      rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
        res(ctx.status(500));
      })
    );

    render(<OrderEntry />, { wrapper: OrderDetailsProvider });

    await waitFor(async () => {
      const alerts = await screen.findAllByRole("alert");

      expect(alerts).toHaveLength(2);
    });
  });
});
