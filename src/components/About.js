import React, { useState } from 'react';
import '../styles/About.css';
// Import the profile image here if it's in your src directory
// import profileImage from '../assets/profile.jpg';

const About = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e) => {
    // Try different paths before showing placeholder
    const currentSrc = e.target.src;
    
    if (currentSrc.includes('./public/image.jpg')) {
      // First fallback - try with the image shown in the conversation
      e.target.src = 'my-img.jpg';
    } else if (currentSrc.includes('my-img.jpg')) {
      // Second fallback
      e.target.src = '/my-img.jpg';
    } else if (currentSrc.includes('/my-img.jpg')) {
      // Third fallback
      e.target.src = '/image.jpg';
    } else {
      // If all attempts fail, show placeholder
      setImageError(true);
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            {!imageError ? (
              <img 
                src="image.jpg" 
                alt="Prathmesh Deshpande" 
                className="profile-image"
                onError={handleImageError}
              />
            ) : (
              <div className="image-placeholder">
                <span>Prathmesh Deshpande</span>
                <p>
                  To display your image:
                </p>
                <p>
                  <small>
                    1. Save your image as "image.jpg"<br/>
                    2. Copy it to the public folder
                  </small>
                </p>
              </div>
            )}
          </div>
          <div className="about-text">
            <p>
              Hello! I'm a passionate frontend developer with a strong focus on creating 
              intuitive and engaging user experiences. With a background in Computer Science, 
              I bring a unique perspective to my development work.
            </p>
            <p>
              My journey in web development started during my college years. Since then, I've been 
              constantly learning and improving my skills to stay current with the latest 
              technologies and best practices.
            </p>
            <p>
              When I'm not coding, you can find me reading books and exploring new technologies. These activities 
              help me maintain a balanced life and often inspire creative solutions to 
              technical challenges.
            </p>
            <div className="about-details">
              <div className="detail">
                <strong>Name:</strong>
                <span>Prathmesh Deshpande</span>
              </div>
              <div className="detail">
                <strong>Email:</strong>
                <span>prathmesh.deshpande00@gmail.com</span>
              </div>
              <div className="detail">
                <strong>Location:</strong>
                <span>India</span>
              </div>
              <div className="detail">
                <strong>Availability:</strong>
                <span>Currently not available for freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 