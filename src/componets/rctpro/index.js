// RecPro.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const RecPro = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { id: 1, name: 'Project 1', url: 'https://dainty-lokum-aa4465.netlify.app/', image: '/images/food_site.png' },
    { id: 2, name: 'Project 2', url: 'https://computeraccessories.netlify.app/', image: '/images/comp_acc.png' },
    { id: 3, name: 'Project 3', url: 'https://roastymeat.netlify.app/', image: '/images/meat_site.png' },
  ];

  const openPopup = (project) => {
    setSelectedImage(project);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedImage(null);
    setPopupVisible(false);
  };

  return (
    <div className="RecPro-container">
      <h2>React Web Project</h2>
      <div className="RecPro-header">
        <a href="https://github.com/amuybar?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFileCircleMinus} className="icon" />
        </a>
        <a href="https://github.com/amuybar/portfolio" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </a>
      </div>
      <div className="RecPro-content">
        {projects.map((project) => (
          <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.name}
              className={`project-image ${project.id === 2 ? 'elevated' : ''}`}
              onClick={() => openPopup(project)}
            />
          </a>
        ))}
      </div>
      {popupVisible && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup">
            <img src={selectedImage?.image} alt={selectedImage?.name} />
          </div>
        </div>
      )}
      <button className="detail-button">Details</button>
    </div>
  );
};

export default RecPro;
