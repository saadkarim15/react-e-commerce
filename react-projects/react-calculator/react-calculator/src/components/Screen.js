import React from "react";
import "../styles/Screen.css";

const Screen = ({ value }) => {
  return (
    <div className="screen__container">
      <div className="screen">{value}</div>
    </div>
  );
};

export default Screen;
