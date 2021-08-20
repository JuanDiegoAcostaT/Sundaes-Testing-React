import React from "react";
import SummaryForm from "./SummaryForm";

const OrderSummary = (): JSX.Element => {
  return (
    <div>
      <h1>Order Summary</h1>

      <div>
        <h2>
          Scoops <span>$6.00</span>{" "}
        </h2>
        <div>
          <ul>
            <li>3 Vanilla</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>
          Toppings <span>$4.50</span>{" "}
        </h2>
        <div>
          <ul>
            <li>M & M'S</li>
            <li>Hot fudge</li>
            <li>Gummi bears</li>
          </ul>
        </div>
      </div>

      <h2>
        Total <span>$10.50</span>{" "}
      </h2>

      <SummaryForm />
    </div>
  );
};

export default OrderSummary;
