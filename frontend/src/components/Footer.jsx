import React from 'react';
import './Footer.css';

const Footer = () => {
  // IMPORTANT: Replace this with your actual Google Maps share link
  const googleMapsLink = "https://www.google.com/maps/place/RAJA+Kumar+iron+Shop+prop.+Yerrapothu+Suribabu/@16.5089464,80.620547,19.73z/data=!4m6!3m5!1s0x3a35f1e05818ba61:0xb8366a66c733016!8m2!3d16.508923!4d80.6209718!16s%2Fg%2F11pdxv3vd5";
  const phoneNumber = "+919346212163";

  const openMaps = () => {
    window.open(googleMapsLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Raja Kumar Old Iron Shop</h3>
            <p>Trusted Iron Scrap Buyer - Best Prices Guaranteed</p>
          </div>

          <div className="footer-section">
            <h4>Location</h4>
            <p className="footer-location" onClick={openMaps}>
              📍 Krishnalanka, Vijayawada, Andhra Pradesh, India
            </p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>📞 9346212163</p>
            <p>📞 9951750999</p>
            <p>🕐 Mon - Sat: 9 AM - 7 PM</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Raja Kumar Old Iron Shop. All rights reserved.</p>
          <p>Krishnalanka, Vijayawada | Best Prices for Iron Scrap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
