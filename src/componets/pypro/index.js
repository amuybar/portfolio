// PyPro.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const PyPro = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/images/ux_profile.png' },
    { id: 2, src: '/images/ux_home.png' },
    { id: 3, src: '/images/ux_profile.png' },
  ];

  const openPopup = (image) => {
    setSelectedImage(image);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedImage(null);
    setPopupVisible(false);
  };
  return (
    <div className="pypro-container">
      <h2>Python Script Project</h2>
      <div className="pypro-header">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFileCircleMinus} className="icon" />
        </a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </a>
      </div>
      <div className="pypro-content">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Project ${image.id}`}
            className={`project-image ${image.id === 2 ? 'elevated' : ''}`}
            onClick={() => openPopup(image)}
          />
        ))}
      </div>
      {popupVisible && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup">
            <img src={selectedImage?.src} alt={`Project ${selectedImage?.id}`} />
          </div>
        </div>
      )}
      <button className="detail-button">Details</button>
    </div>
  );
};

export default PyPro;
