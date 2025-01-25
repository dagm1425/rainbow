import React from "react";
import "./styles.css";
import { Link } from "react-router";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-message">
        <h2>Get in Touch with Us</h2>
        <p>We’re here to help with all your office supply needs.</p>
      </div>
      <div className="contact-button">
        <Link to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
