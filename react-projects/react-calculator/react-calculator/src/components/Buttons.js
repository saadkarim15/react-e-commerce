import React from "react";
import "../styles/Buttons.css";

const Buttons = ({ setValue, value }) => {
  const getValue = (e) => {
    setValue(parseFloat(value + e.target.innerText));
  };
  return (
    <div className="buttons__container">
      <div className="buttons">
        <button onClick={getValue} className="number">
          7
        </button>
        <button onClick={getValue} className="number">
          8
        </button>
        <button onClick={getValue} className="number">
          9
        </button>
        <button onClick={getValue} className="grid2__column syntax">
          -
        </button>
        <button onClick={getValue} className="number">
          4
        </button>
        <button onClick={getValue} className="number">
          5
        </button>
        <button onClick={getValue} className="number">
          6
        </button>
        <button onClick={getValue} className="syntax">
          ÷
        </button>
        <button onClick={getValue} className="grid2__row syntax">
          +
        </button>
        <button onClick={getValue} className="number">
          1
        </button>
        <button onClick={getValue} className="number">
          2
        </button>
        <button onClick={getValue} className="number">
          3
        </button>
        <button onClick={getValue} className="syntax">
          ×
        </button>
        <button onClick={getValue} className="number">
          0
        </button>
        <button onClick={getValue} className="dot">
          .
        </button>
        <button onClick={getValue} className="clear">
          C
        </button>
        <button onClick={getValue} className="grid2__column equal">
          =
        </button>
      </div>
    </div>
  );
};

export default Buttons;
