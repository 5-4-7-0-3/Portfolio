import React, { useState, useEffect } from 'react';
import '../css/EndLoader.css';

const EndLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (progress < 100) {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 100,
        );
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div>
      <div className="black-screen" style={{ top: `${progress}%` }}></div>
      <div className="white-bar" style={{ top: `${progress}%` }}></div>
    </div>
  );
};

export default EndLoader;
