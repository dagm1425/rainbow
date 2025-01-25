import React from "react";
import "./styles.css"; 
import Breadcrumb from "../../common/Breadcrumb/Breadcrumb";

export default function Hero() {
  return (
    <div className="about-wrapper">
      <Breadcrumb links={["home", "about"]} />
      <div className="about-main">
        <h1>about us</h1>
        <p>
          Rainbow Computer Accessories and Stationery Supplier, with over 25 years of experience, is committed to providing businesses and individuals with high-quality office supplies. Since its founding, the company has built a strong reputation for reliability and customer service. Rainbow offers a wide range of products to enhance productivity and support the success of clients across various industries.
        </p>
      </div>
      <div className="overlay" />
    </div>
  );
}
