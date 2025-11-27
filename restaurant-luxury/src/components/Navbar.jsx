import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="nav-logo">YARASH</div>

      
      <div className="nav-menu">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
        </ul>

        <a href="#contact">
          <button className="reserve-btn">Reserve Table</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
