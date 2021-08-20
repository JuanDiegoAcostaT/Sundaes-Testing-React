import React, { useState } from "react";

type Props = {
  titleForHover: string;
  children: JSX.Element;
};

const Popover = ({ children, titleForHover }: Props) => {
  const [show, setShow] = useState(false);

  const handleHover = (): void => {
    setShow(!show);
  };

  return (
    <div className="popover__wrapper">
      <a
        onMouseOver={() => handleHover()}
        onMouseLeave={() => handleHover()}
        href="#"
      >
        {titleForHover}
      </a>
      {show && <div data-testid="hover">{children}</div>}
    </div>
  );
};

export default Popover;
