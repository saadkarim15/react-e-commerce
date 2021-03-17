import React, { useState } from "react";

const PriceFilter = ({ forId, price }) => {
  const [radioHandler, setRadioHandler] = useState(true);
  return (
    <div>
      <div className="filter__name">
        <label for={forId}>{price}</label>
        <input
          type="radio"
          name="price"
          id={forId}
          onClick={(e) => {
            !radioHandler
              ? setRadioHandler(true)
              : setRadioHandler(!radioHandler);
            e.target.checked = radioHandler;
          }}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
