import React, { useState } from "react";
import Popover from "../../components/Popover";

const SummaryForm = (): JSX.Element => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDisableButton(!e.target.checked);
  };

  return (
    <div>
      <input
        onChange={(e) => handleCheckBox(e)}
        type="checkbox"
        name=""
        id="agree"
      />

      <label htmlFor="agree">
        I agree to
        <Popover titleForHover={"Terms and Conditions"}>
          <div className="popover__content">
            <p className="popover__message">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>
          </div>
        </Popover>
      </label>

      <div>
        <button disabled={disableButton}>Confirm Order</button>
      </div>
    </div>
  );
};

export default SummaryForm;
