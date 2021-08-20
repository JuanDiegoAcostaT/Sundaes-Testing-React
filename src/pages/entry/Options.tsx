import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";
import { PriceItem } from "../../constants/index";
import {
  OrderDetailsProvider,
  useOrderDeatils,
} from "../../context/OrderDetails";

enum optionType {
  scoops = "scoops",
  toppings = "toppings",
}

type Props = {
  optionType: "scoops" | "toppings";
};

type Scoops = {
  name: string;
  imagePath: string;
};

type ScoopsToppings = {
  name: string;
  imagePath: string;
  updateItemCount: Function;
};

const Options = ({ optionType }: Props) => {
  const [items, setItems] = useState<Scoops[]>([]);
  const [error, setError] = useState<boolean>(false);

  const [orderDetails, updateItemCount] = useOrderDeatils();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response: AxiosResponse): void => {
        setItems(response.data);
      })
      .catch((err: AxiosError): void => {
        setError(true);
      });
  }, [optionType]);

  if (error) {
    return (
      <Alert
        alertMessage={"i have failed yes because"}
        alertTitle={"FAILL"}
        color={"red"}
      />
    );
  }

  const ItemComponent: React.FC<ScoopsToppings> =
    optionType === "scoops" ? ScoopOptions : ToppingOptions;

  const optionItems = items.map(
    (item, index): JSX.Element => (
      <ItemComponent
        updateItemCount={(itemName: string, newItemCount: number): Function =>
          updateItemCount(itemName, newItemCount, optionType)
        }
        key={index}
        imagePath={item.imagePath}
        name={item.name}
      />
    )
  );

  const title: string =
    optionType[0].toUpperCase() + optionType.slice(1).toLocaleLowerCase();

  return (
    <>
      <h2>{title}</h2>
      <p>${PriceItem[optionType]} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <div className="optionsContainer">{optionItems}</div>
    </>
  );
};

export default Options;
