import React from "react";
import Breadcrumb from "../../common/Breadcrumb/Breadcrumb";
import "./styles.css";

export default function Hero() {
  return (
    <div className="contact-products-container">
      <Breadcrumb links={["home", "products"]} />
      <div className="contact-inner">
        <h1>Our Products</h1>
        <p>
            Explore our range of office essentials tailored to enhance productivity and efficiency. From high-quality stationery to continuous printed paper for bulk printing solutions and premium printer consumables, we’ve got everything you need to keep your office running smoothly. 
        </p>
      </div>
      <div className="overlay" />
    </div>
  );
}
