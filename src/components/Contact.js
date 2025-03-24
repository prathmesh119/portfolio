import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            {/* <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p> */}
            
            <div className="info-item">
              <i className="icon">📍</i>
              <span>India</span>
            </div>
            
            <div className="info-item">
              <i className="icon">📧</i>
              <span>prathmesh.deshpande00@gmail.com</span>
            </div>
            
            <div className="info-item">
              <i className="icon">📱</i>
              <span>+91 7499 8548 26</span>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/prathmesh119" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/prathmesh-deshpande" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://twitter.com/prathmesh" target="_blank" rel="noopener noreferrer" className="social-link">
                Twitter
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 