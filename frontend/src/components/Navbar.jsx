import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleBookPickup = () => {
    scrollToSection('pickup-form');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <h2>Raja Kumar Old Iron Shop</h2>
          </div>

          <button 
            className="navbar-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li>
              <button className="btn btn-primary" onClick={handleBookPickup}>
                Book Pickup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
