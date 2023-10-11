import React from 'react';
import '../css/Contacts.css';

const Contacts = () => {
  const telegramImgUrl = process.env.PUBLIC_URL + '/images/icon-telegram.png';
  const telegramUrl = 'https://t.me/vlad54703';
  const linkedinImgUrl = process.env.PUBLIC_URL + '/images/icon-linkedin.png';
  const linkedinUrl = 'https://www.linkedin.com/in/vlad-kovalyov/';

  return (
    <div className="fixed-div">
      <div className="icons">
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
          <img src={telegramImgUrl} alt="Telegram Icon" className="icon" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={linkedinImgUrl} alt="LinkedIn Icon" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
