import React from 'react';
import '../css/Projects.css'; // Підключаємо стилі

const Projects = [
  {
    id: 1,
    title: 'Project Name 1',
    description: 'Brief description of project 1.',
    technologies: 'Technology 1, Technology 2, Technology 3',
    image: process.env.PUBLIC_URL + '/images/Project.png',
    link: 'link_to_project_1',
  },
  {
    id: 2,
    title: 'Project Name 2',
    description: 'Brief description of project 2.',
    technologies: 'Technology 1, Technology 2, Technology 3',
    image: process.env.PUBLIC_URL + '/images/Project.png',
    link: 'link_to_project_2',
  },
  // Додайте інші проекти в масив аналогічно
];

const ProjectList = () => {
  return (
    <div className="projects-container">
      <h1>My projects</h1>
      {Projects.map((project) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          key={project.id}
        >
          <div className="project-item">
            <img
              src={project.image}
              alt={`Project: ${project.title}`}
              className="project-image"
            />
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <ul className="technologies-list">
                <li className="technology-item">{project.technologies}</li>
              </ul>
            </div>
          </div>
        </a>
      ))}
      <h1>Coming soon...</h1>
    </div>
  );
};

export default ProjectList;
