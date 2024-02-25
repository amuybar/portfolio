// Skills.js
import React from 'react';
import './index.css';

const Skills = () => {
  return (
    <div className="skills-container">
        <h2>Skills</h2>
      <div className="skill-category frontend">
        <h3>Frontend</h3>
        <ul>
        <li>Flutter</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          
        </ul>
      </div>
      <div className="skill-category backend">
        <h3>Backend</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Sqlite</li>
          
        </ul>
      </div>
      <div className="skill-category scripting">
        <h3>Scripting</h3>
        <ul>
          <li>Python</li>
          
          
        </ul>
      </div>
      <div className="skill-category seo">
        <h3>SEO</h3>
        <ul>
          <li>Keyword Research</li>
          <li>On-Page SEO</li>
          <li>Backlink Building</li>
        
        </ul>
      </div>
    </div>
  );
};

export default Skills;
