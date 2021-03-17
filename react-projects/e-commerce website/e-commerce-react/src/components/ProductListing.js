import React from "react";
import "../styles/ProductListing.css";

const ProductListing = () => {
  return (
    <div className="product__listers">
      <div className="list__box">
        <div className="box__listing">
          <i className="fas fa-border-all"></i>
        </div>
        <div className="list__listing">
          <i className="fas fa-list-ul"></i>
        </div>
      </div>
      <div className="list__styles">
        <select className="sorting__list">
          <option value="default sorting">Default Sorting</option>
          <option value="price sorting">Price Sorting</option>
          <option value="color sorting">Color Sorting</option>
        </select>
      </div>
    </div>
  );
};

export default ProductListing;
