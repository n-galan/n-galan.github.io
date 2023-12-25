// Boxing.js
import React from 'react';
import '../../styles/Paino.css'; // Path to your Boxing CSS file
import ComingSoon from '../../img/ComingSoon.png'

const Piano = () => {
  return (
    <div className="Piano-container">
      <div className="coming-soon-overlay">
        <img src={ComingSoon} alt="Coming Soon" className="coming-soon-image" />
      </div>
    </div>
  );
};

export default Piano;
