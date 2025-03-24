import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A responsive React dashboard for e-commerce stores with real-time analytics, inventory management, and sales tracking.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      image: 'project1.jpg',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/prathmesh119/ecommerce-dashboard'
    },
    {
      title: 'Weather Forecast App',
      description: 'A weather application built with React that provides real-time weather forecasts, hourly updates, and 7-day predictions for any location.',
      tags: ['React', 'Weather API', 'JavaScript', 'CSS', 'Responsive Design'],
      image: 'project2.jpg',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/prathmesh119/weather-app'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management platform with drag-and-drop UI, notifications, task prioritization, and team assignment features.',
      tags: ['React', 'Redux', 'Firebase', 'Material UI'],
      image: 'project3.jpg',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/prathmesh119/task-manager'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <div className="image-placeholder">
                  {/* Replace with actual project image */}
                  <span>{project.title} Screenshot</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span className="tag" key={idx}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.codeLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 