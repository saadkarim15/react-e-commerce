import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <header className="header">
        <Navbar />
        <Slider />
      </header>
    </div>
  );
};

export default Header;
