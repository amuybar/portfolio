// RecPro.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const RecPro = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/images/Screenshot from 2024-02-22 06-49-36.png' },
    { id: 2, src: '/images/Screenshot from 2024-02-22 06-50-26.png' },
    { id: 3, src: '/images/Screenshot from 2024-02-22 06-50-33.png' },
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
    <div className="RecPro-container">
      <h2>React Web Project</h2>
      <div className="RecPro-header">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFileCircleMinus} className="icon" />
        </a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </a>
      </div>
      <div className="RecPro-content">
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

export default RecPro;
