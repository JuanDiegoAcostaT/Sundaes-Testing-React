import React from "react";

type Props = {
  alertMessage: string;
  alertTitle: string;
  color: string;
};

const Alert = ({ alertMessage, alertTitle, color }: Props) => {
  return (
    <div role="alert" style={{ width: "200px", backgroundColor: color }}>
      <h1>{alertTitle}</h1>
      <p>{alertMessage}</p>
    </div>
  );
};

export default Alert;
