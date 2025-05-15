import React from 'react';
import './styles.css';
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          YOUR PARTNER FOR
          <br />
          RELIABLE OFFICE SUPPLIES 
        </h1>
        <p className="hero-subtitle">
          From everyday essentials to specialized tools,
          we’re here to support your business with high-quality office supplies you can trust.
        </p>
        <div className="button-group">
          <Link to="/about" 
            className="button button-primary"

          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

