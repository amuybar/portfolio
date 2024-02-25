import React, { useState } from 'react';
import './index.css'; 

const ElevatedCard = ({ title, info, images, buttonText, buttonAction }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (direction) => {
    const newIndex = (currentImage + images.length + direction) % images.length;
    setCurrentImage(newIndex);
  };

  return (
    <div className="elevated-card">
      <header>
        <div className="icon-button">{/* Your icon here */}</div>
        <div className="title">{title}</div>
      </header>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={title}
            className={`carousel-image ${index === currentImage ? 'active' : ''}`}
          />
        ))}
        <button onClick={() => handleImageChange(-1)}>Prev</button>
        <button onClick={() => handleImageChange(1)}>Next</button>
      </div>
      <div className="info">{info}</div>
      <button className="center-button" onClick={buttonAction}>
        {buttonText}
      </button>
    </div>
  );
};

export default ElevatedCard;
