import React from 'react';
import '../css/Header.css';

const Header = () => {
  const urlPhoto = process.env.PUBLIC_URL + '/images/photo.jpg';
  const name = 'Kovalov Vlad';
  return (
    <div className="header">
      <img src={urlPhoto} alt={name} className="header-photo" />
      <div className="header-text">
        <h1>{name}</h1>
        <p>BackEnd Developer, Fullstack Developer </p>
      </div>
    </div>
  );
};

export default Header;
