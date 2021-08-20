import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OrderSummary from "./pages/summary/OrderSummary";
import { OrderDetailsProvider } from "./context/OrderDetails";
import OrderEntry from "./pages/entry/OrderEntry";

function App() {
  return (
    <div className="App">
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
      <OrderSummary />
    </div>
  );
}

export default App;
