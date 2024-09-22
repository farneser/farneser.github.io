import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    link: '#'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
