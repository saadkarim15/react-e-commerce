import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="2748373"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            price="19.99"
            rating={5}
          />
          <Product
            id="83833SD"
            title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
            image="https://images-na.ssl-images-amazon.com/images/I/51odsYyURHL._SX522_.jpg"
            price="599.99"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="76606ZA"
            image="https://images-na.ssl-images-amazon.com/images/I/81XnuXLdAHL._AC_SY450_.jpg"
            title="Hamilton Beach Smooth Touch Electric Automatic Can Opener with Easy Push Down Lever, Opens All Standard-Size and Pop-Top Cans, Extra Tall, Black and Chrome"
            price="29.85"
            rating={5}
          />
          <Product
            id="86832FS"
            image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SX425_.jpg"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-year Rescue Service (STGX2000400)"
            price="54.99"
            rating={4}
          />
          <Product
            id="93327HE"
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX425_.jpg"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            price="364.99"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="61252FS"
            image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SY355_.jpg"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
            price="41.99"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
