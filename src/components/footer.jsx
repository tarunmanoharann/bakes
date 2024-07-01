import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About SheBakes</h3>
          <p>Crafting delicious, custom-made cakes and treats for all your special occasions.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Our Products</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@shebakes.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Cake Street, Sweetville, CA 90210</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">PT</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 SheBakes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;