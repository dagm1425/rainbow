import React from 'react';
import './styles.css';
import { Link } from "react-router";

export default function Nav() {
  return (
      <nav className="nav">
        <Link to="/" className="logo">
          <img src="../../../images/logo.png" alt="rainbow logo" />
        </Link>
        
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <div className='separator'/>
          </li>
          <li>
            <Link to="/contact" className="template-button">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
  );
}

