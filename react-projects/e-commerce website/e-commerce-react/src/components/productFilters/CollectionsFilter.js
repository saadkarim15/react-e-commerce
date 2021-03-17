import React, { useState } from "react";

const CollectionsFilter = ({ forId, filterName, checked, clickButton }) => {
  const [radioHandler, setRadioHandler] = useState(true);
  return (
    <div>
      <div className="filter__name">
        <label htmlFor={forId}>{filterName}</label>
        <input
          onClick={(e) => {
            !radioHandler
              ? setRadioHandler(true)
              : setRadioHandler(!radioHandler);
            e.target.checked = radioHandler;
          }}
          type="radio"
          name="collection"
          id={forId}
        />
      </div>
    </div>
  );
};

export default CollectionsFilter;
