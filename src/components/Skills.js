import React from 'react';
import '../css/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skill">
        <h2>About Me</h2>
        <h>
          I have one year of experience in developing server-side applications
          using Node.js, Express.js, and Koa.js. I also self-learned React.js
          and successfully implemented it in my projects. <br />
          My goal is to provide efficient, fast, and reliable solutions for web
          applications and constantly expand my technical knowledge.
        </h>
      </div>

      <div className="skill">
        <h2>Experience</h2>
        <h>
          Backend Intern (3 months) <br />
          Company ROOM4, Mykolaiv, 2021-2021 <br />
          <br />
          Backend Developer (7 months) <br />
          Company UnicornPower, remote, 2022-2023 <br />
          Developed and maintained large-scale server-side applications using
          Node.js, Express.js, and Koa.js. Implemented and optimized MongoDB and
          PostgreSQL databases to ensure speed and reliability. Wrote efficient
          APIs for interaction with frontend applications. <br />
          <br />
          Frontend Developer (Self-taught React) <br />
          Independent Project, 2023 Learned React.js and created interactive and
          responsive interfaces for web applications. Implemented client-side of
          applications for optimal interaction with the server.
        </h>
      </div>

      <div className="skill">
        <h2>Technical Skills</h2>
        <h>
          Backend: Node.js, Express.js, Koa.js (3 years) <br />
          <br />
          Databases: MongoDB, PostgreSQL (3 years) <br />
          <br />
          Frontend: React.js, HTML, CSS, JavaScript (1 year) <br />
          <br />
          Other Technologies: RESTful API, WebSocket, Git, ZohoCRM, PipeDrive,
          PipeDream, TelegramBot
        </h>
      </div>
    </div>
  );
};

export default Skills;
