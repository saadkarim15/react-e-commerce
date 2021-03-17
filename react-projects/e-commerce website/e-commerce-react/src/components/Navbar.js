import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <nav className="nav__bars">
        <div className="navbar__one">
          <div className="logo__container">
            <a href="/" className="logo">
              Rasterizer
            </a>
          </div>
          <form className="product__search">
            <input
              type="text"
              placeholder="Search for product"
              className="search__box"
            />
            <button type="submit" className="search__btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="icons">
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
        <hr
          style={{ position: "absolute", top: "50%", width: "100%", left: 0 }}
        />
        <div className="navbar__two">
          <div className="category__container">
            <select className="categories">
              <option value="all">All</option>
              <option value="shoes">Shoes</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="Shirt">Shirt</option>
            </select>
          </div>
          <div className="navLinks__container">
            <ul className="nav__links">
              <li className="nav__link">
                <a href="/">Home</a>
              </li>
              <li className="nav__link">
                <a href="/">New Arrivals</a>
              </li>
              <li className="nav__link">
                <a href="/">Trending</a>
              </li>
              <li className="nav__link">
                <a href="/">Pages</a>
              </li>
            </ul>
          </div>
          <div className="deals__offer">
            <a href="/" className="hot__deals">
              <i className="fas fa-fire-alt"></i>
              <span>Hot Deals</span>
            </a>
            <a href="/" className="offer__zone">
              <i className="far fa-star"></i>
              <span>Offer Zone</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
