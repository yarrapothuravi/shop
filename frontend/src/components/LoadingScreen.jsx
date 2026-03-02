import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="spinner"></div>
        <h2>Raja Kumar Old Iron Shop</h2>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
