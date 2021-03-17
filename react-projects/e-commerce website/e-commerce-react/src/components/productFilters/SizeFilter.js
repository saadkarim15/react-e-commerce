import React, { useState } from "react";

const SizeFilter = ({ size }) => {
  const [radioHandler, setRadioHandler] = useState(true);
  return (
    <div>
      <label className="size__radio">
        <input
          type="radio"
          name="size"
          className="size"
          onClick={(e) => {
            !radioHandler
              ? setRadioHandler(true)
              : setRadioHandler(!radioHandler);
            e.target.checked = radioHandler;
          }}
        />
        <span className="size__name">{size}</span>
        <span className="size__checkmark"></span>
      </label>
    </div>
  );
};

export default SizeFilter;
