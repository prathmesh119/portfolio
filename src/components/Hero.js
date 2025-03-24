import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Prathmesh Deshpande</span></h1>
        <h2>Frontend Developer</h2>
        <p>I create responsive and user-friendly web applications</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 