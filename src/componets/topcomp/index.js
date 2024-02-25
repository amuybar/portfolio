import React, { useState } from 'react';
import {  IoIosDownload } from 'react-icons/io';

import './index.css';

const TopContainer = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleDownload = (type) => {
    // Replace with actual download logic based on the type
    // For demonstration, we'll just log the type
    console.log(`Downloading ${type}`);
  };

  return (
    <div className="top-container">
      
      <div className="title">Junior Software Developer</div>
     
      <div className="bottom-section">
        <div className="name">Barrack Amuyunzu</div>
        <div className="menu-button" onClick={toggleMenu}>
        <IoIosDownload className='icon'/>
        {menuVisible && (
          <div className="dropdown-menu">
            <div onClick={() => handleDownload('CV')}>Download CV</div>
            <div onClick={() => handleDownload('Certificates')}>Download Certificates</div>
            <div onClick={() => handleDownload('Credentials')}>Download Credentials</div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default TopContainer;
