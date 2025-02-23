// Navbar.js
import React from 'react';
import './Navbar.css';

import { FaMapMarkerAlt, FaPhone, FaExclamationTriangle, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <button className="nav-button">
          <FaMapMarkerAlt className="icon" />
          Location
        </button>
        <button className="nav-button">
          <FaPhone className="icon" />
          Contact
        </button>
      </div>

      {/* Center Section - Logo */}
      <div className="navbar-center">

        <h1 className="logo">Gevini Foods</h1>

      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <button className="nav-button">
          <FaExclamationTriangle className="icon" />
          Complaint
        </button>
        <button className="cart-button">
          <FaShoppingCart className="icon" />
        </button>
      </div>
    </nav>
  );
};


export default Navbar;
