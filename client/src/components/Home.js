import React from "react";
import "./Home.css"; // Import your CSS
import logo from "../assets/logo.png"; // Import your logo

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Logo Section */}
      <header className="logo-section">
        <img src={logo} alt="Restaurant Logo" className="logo-image" />
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact">Order</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
