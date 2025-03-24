import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", percentage: 95 },
        { name: "CSS3/SASS", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "React.js", percentage: 80 },
        { name: "Next.js", percentage: 75 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", percentage: 85 },
        { name: "Responsive Design", percentage: 90 },
        { name: "UI/UX Basics", percentage: 75 },
        { name: "Performance Optimization", percentage: 70 },
        { name: "Testing", percentage: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-level" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
