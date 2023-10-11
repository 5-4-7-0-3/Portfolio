import React, { useState, useEffect } from 'react';
import '../css/Loader.css'; // Підключаємо CSS стилі для лоадера

const Loader = ({ onLoadingFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 50,
        );
      } else {
        setTimeout(() => {
          onLoadingFinished(); // Викликаємо зовнішню функцію, яка обробляє завершення роботи лоадера
        }, 400);
      }
    }, 500); // Швидкість заповнення прогресу
    return () => {
      clearInterval(interval);
    };
  }, [progress, onLoadingFinished]);

  return (
    <div className="loader-container">
      {/* eslint-disable-next-line */}
      <h1 className="loader-h1">//let’s make</h1>
      <div className="loader-text">PORTFOLIO</div>
      <div className="loader-box">
        <div className="loader-bar-container">
          <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
