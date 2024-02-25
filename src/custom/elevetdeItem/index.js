import React, { useState } from 'react';
import './index.css'; 



const ElevatedCard = ({ title, info,  }) => {
 

  return (
    <div className="elevated-card">
      <header>
      <div className="title">{title}</div>
      </header>
      <div className="content">
       
        
      </div>
      <div className="info">{info}</div>
      
    </div>
  );
};

export default ElevatedCard;
