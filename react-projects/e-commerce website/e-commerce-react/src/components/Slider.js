import React from "react";
import "../styles/Slider.css";
import banner from "../img/banner.jpg";

const Slider = () => {
  return (
    <div className="slider__wrapper">
      <div className="slider">
        <img src={banner} alt="" />
        <h3 className="banner__text">Accessories Collection</h3>
      </div>
    </div>
  );
};

export default Slider;
