import React from "react";

type Toppings = {
  name: string;
  imagePath: string;
  updateItemCount: Function;
};

const ToppingOptions = ({
  name,
  imagePath,
  updateItemCount,
}: Toppings): JSX.Element => {
  return (
    <div>
      <img
        className="toppings"
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
    </div>
  );
};

export default ToppingOptions;
