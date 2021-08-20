import React from "react";

type Scoops = {
  name: string;
  imagePath: string;
  updateItemCount: Function;
};

const ScoopOptions = ({
  name,
  imagePath,
  updateItemCount,
}: Scoops): JSX.Element => {
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateItemCount(name, +e.target.value);
  };

  return (
    <div>
      <img
        className="scoops"
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <form action="">
        <label htmlFor="spin">{name}</label>
        <input
          id="spin"
          aria-label={name + "scoop"}
          role="spinbutton"
          onChange={handleChangeNumber}
          type="number"
        />
      </form>
    </div>
  );
};

export default ScoopOptions;
