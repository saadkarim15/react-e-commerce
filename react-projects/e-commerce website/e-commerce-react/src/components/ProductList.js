import React from "react";
import Product from "./Product";
import "../styles/ProductList.css";

const ProductList = () => {
  return (
    <div className="product__list">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;
