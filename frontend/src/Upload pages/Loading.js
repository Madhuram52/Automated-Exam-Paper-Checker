import React from 'react';
import './Loading.css'; // Create a separate CSS file for styling

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
