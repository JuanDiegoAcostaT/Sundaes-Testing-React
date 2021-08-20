import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PriceItem } from "../constants/index";
import { formatCurrency } from "../utilities";

type ContextProps = {
  scoops: Record<string | any, number | any>;
  toppins: Record<string | any, number | any>;
};

type Totals = {
  scoops: number | string;
  toppings: number | string;
  grandTotal: number | string;
};

const orderDetailsContext = createContext<Partial<ContextProps>>({});

type OrderDeatailsOptionsCount = {
  // scoops: Record<string | any, number | any>;
  // toppings: Record<string | any, number | any>;
  [index: string]: Record<string | any, number | any>;
};

function calculateSubtotal(
  orderType: string,
  optionsCount: OrderDeatailsOptionsCount
): number {
  let optionCount: number = 0;

  for (const count of optionsCount[orderType].values()) {
    optionCount += count;
  }
  return optionCount * PriceItem[orderType];
}

// function useOrderDeatils(): React.Context<any> {
export function useOrderDeatils(): any {
  const context = useContext(orderDetailsContext);

  if (!context) {
    throw new Error(
      "useOrderDetails debe de ser usado con un OrderDetails Proveedor"
    );
  }
  return context;
}

export function OrderDetailsProvider(props: any) {
  const [optionsCount, setOptionsCount] = useState<OrderDeatailsOptionsCount>({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatCurrency(0);

  const [totals, setTotals] = useState<Totals>({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopsSubtotal: number = calculateSubtotal("scoops", optionsCount);
    const toppingsSubToTal: number = calculateSubtotal(
      "toppings",
      optionsCount
    );
    const grandTotal: number = scoopsSubtotal + toppingsSubToTal;

    setTotals({
      scoops: formatCurrency(scoopsSubtotal),
      toppings: formatCurrency(toppingsSubToTal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionsCount]);

  const value = useMemo(() => {
    function updateItemCount(
      itemName: string,
      newItemCount: number,
      optionType: string
    ) {
      const optionsCuntCopy = { ...optionsCount };

      const optionsCountMap = optionsCount[optionType];
      optionsCountMap.set(itemName, newItemCount);

      setOptionsCount(optionsCuntCopy);
    }

    return [{ ...optionsCount, totals }, updateItemCount];
  }, [optionsCount, totals]);

  return <orderDetailsContext.Provider value={value} {...props} />;
}
