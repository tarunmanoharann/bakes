// src/components/Navbar.js
import React from 'react';
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>SheBakes</h1>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#cakes" className="nav-links">Cakes</a>
          </li>
          <li className="nav-item">
            <a href="#brownies" className="nav-links">Brownies</a>
          </li>
          <li className="nav-item">
            <a href="#cupcakes" className="nav-links">Cupcakes</a>
          </li>
        </ul>
        <button className="explore-button">
          Customize
        </button>
      </div>
    </nav>
  );
};

export default Navbar;