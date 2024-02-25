// Footer.js
import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-icons">
        
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        
      </div>
      <div className="copyright">
        &copy; 2024 Your Name. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
