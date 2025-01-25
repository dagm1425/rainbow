import React from "react";
import Breadcrumb from "../../common/Breadcrumb/Breadcrumb";
import "./styles.css";

export default function Hero() {
  return (
    <div className="contact-container">
      <Breadcrumb links={["home", "contact"]} />
      <div className="contact-inner">
        <h1>Connect with Us</h1>
        <p>
          At Rainbow, we're committed to providing high-quality office supplies
          and stationery that help your business run smoothly. Our team is here
          to answer any questions and assist you with all your office supply
          needs.
        </p>
      </div>
      <div className="overlay" />
    </div>
  );
}
