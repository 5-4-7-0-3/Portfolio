import React from 'react';
import '../css/Footer.css'; // Підключаємо стилі

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>
          Email:{' '}
          <a href="mailto:vlad.kovalov2000@gmail.com">
            vlad.kovalov2000@gmail.com
          </a>
        </p>
        <p>Phone: +380682135903</p>
      </div>
      <div className="social-media">
        <h3>Social Media</h3>
        <a href="https://t.me/vlad54703">Telegram</a>
        <a href="https://www.linkedin.com/in/vlad-kovalyov/">Linkedin</a>
      </div>
    </footer>
  );
};

export default Footer;
