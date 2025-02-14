import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="logo" onClick={handleLinkClick}>
        <img src="../../../images/logo.png" alt="rainbow logo" />
      </Link>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/products" 
            className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            Products
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            About Us
          </Link>
        </li>
        <li>
          <div className="separator" />
        </li>
        <li>
          <Link 
            to="/contact" 
            className={`template-button ${location.pathname === '/contact' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
