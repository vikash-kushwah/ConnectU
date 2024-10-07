// src/components/LoadingSpinner.jsx

import React from 'react';
import './LoadingSpinner.css'; // We'll create this file next

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
