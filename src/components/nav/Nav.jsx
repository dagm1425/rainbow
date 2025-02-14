import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/" className="nav-link active" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link" onClick={handleLinkClick}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={handleLinkClick}>
            About Us
          </Link>
        </li>
        <li>
          <div className="separator" />
        </li>
        <li>
          <Link to="/contact" className="template-button" onClick={handleLinkClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
