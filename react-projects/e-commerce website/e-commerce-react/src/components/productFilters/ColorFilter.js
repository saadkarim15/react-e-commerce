import React, { useState } from "react";

const ColorFilter = ({ background }) => {
  const [radioHandler, setRadioHandler] = useState(true);
  return (
    <div>
      <label className="color__radio">
        <input
          type="radio"
          name="color"
          className="color"
          onClick={(e) => {
            !radioHandler
              ? setRadioHandler(true)
              : setRadioHandler(!radioHandler);
            e.target.checked = radioHandler;
          }}
        />
        <span
          style={{ background: `#${background}` }}
          className="checkmark"
        ></span>
      </label>
    </div>
  );
};

export default ColorFilter;
