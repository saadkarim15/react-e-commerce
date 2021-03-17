import React from "react";
import product1 from "../img/product-1.jpg";
import product2 from "../img/product-2.jpg";
import product3 from "../img/product-3.jpg";
import product4 from "../img/product-4.jpg";
import product5 from "../img/product-5.jpg";
import product6 from "../img/product-6.jpg";
import product7 from "../img/product-7.jpg";
import "../styles/Product.css";

const Product = () => {
  return (
    <div className="Product__container">
      <div className="product">
        <div className="productImg__container">
          <div className="product__img">
            <img src={product1} alt="" srcset="" />
          </div>
          <div className="product__buttons">
            <button className="eye__button product__button">
              <i className="far fa-eye "></i>
            </button>
            <button className="favorite__button product__button">
              <i className="fas fa-heart"></i>
            </button>
            <button className="addToBasket__button product__button">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <div className="product__details">
          <p className="product__name">Blue Classic Shoe</p>
          <span className="product__price">$109.93</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
