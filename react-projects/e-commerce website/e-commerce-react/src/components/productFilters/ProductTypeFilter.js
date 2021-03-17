import React, { useState } from "react";

const ProductTypeFilter = ({ forId, filterName }) => {
  const [radioHandler, setRadioHandler] = useState(true);
  return (
    <div>
      <div className="filter__name">
        <label for={forId}>{filterName}</label>
        <input
          type="radio"
          name="product"
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

export default ProductTypeFilter;
