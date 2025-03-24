import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Prathmesh Deshpande</h2>
            <p>Frontend Developer</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="https://github.com/prathmesh119" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} Prathmesh Deshpande. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 