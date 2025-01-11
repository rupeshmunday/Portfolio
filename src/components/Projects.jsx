import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Personal Portfolio Website',
      description: 'My personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.',
      technologies: ['React', 'Tailwind CSS', 'Netlify'],
      demoLink: 'https://your-portfolio-website.com', // Replace with your actual demo link
      githubLink: 'https://github.com/your-username/your-portfolio-repo', // Replace with your actual GitHub repo link
      icon: '👤',
    },
    {
      title: 'E-commerce Product Page',
      description: 'A responsive e-commerce product page built with HTML, CSS, and JavaScript, focusing on user experience and clean design.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://e-commerce-product-page.com', // Replace with your actual demo link
      githubLink: 'https://github.com/your-username/e-commerce-product-page', // Replace with your actual GitHub repo link
      icon: '🛍️',
    },
    {
      title: 'Interactive To-Do List',
      description: 'A simple and interactive to-do list application built with React, allowing users to add, edit, and delete tasks.',
      technologies: ['React', 'JavaScript', 'Local Storage'],
      demoLink: 'https://interactive-todo-list.com', // Replace with your actual demo link
      githubLink: 'https://github.com/your-username/interactive-todo-list', // Replace with your actual GitHub repo link
      icon: '✅',
    },
    {
        title: 'Weather App',
        description: 'A simple weather app using OpenWeatherMap API to fetch current weather data for a given city.',
        technologies: ['React', 'API Integration', 'CSS'],
        demoLink: 'https://weather-app-example.com',
        githubLink: 'https://github.com/your-username/weather-app',
        icon: '🌦️'
    },
    {
        title: 'Recipe Search App',
        description: 'An app that allows users to search for recipes using an external recipe API.',
        technologies: ['React', 'API Integration', 'Material UI'],
        demoLink: 'https://recipe-search-example.com',
        githubLink: 'https://github.com/your-username/recipe-search',
        icon: '🍳'
    },
    {
        title: 'Simple Blog Website',
        description: 'A basic blog website with posts, categories, and commenting functionality.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Backend (e.g., Node.js/Express)'],
        demoLink: 'https://simple-blog-example.com',
        githubLink: 'https://github.com/your-username/simple-blog',
        icon: '📝'
    }
  ];

  return (
    <section id="projects" className="bg-neutral-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A showcase of my best work and professional projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Project key={index} {...project} animationDelay={`${index * 0.15}s`} /> // Reduced delay for smoother animation
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#" // Replace with your "View All Projects" link
            className="inline-block bg-neutral-800 text-white px-8 py-3 rounded-lg hover:bg-neutral-700 transition-all animate__animated animate__fadeIn"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

const Project = ({ title, description, technologies, demoLink, githubLink, icon, animationDelay }) => {
  return (
    <div
      className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp`}
      style={{ animationDelay }}
    >
      <div className="relative aspect-video bg-neutral-200 flex items-center justify-center"> {/* Added flex for icon centering */}
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-300 opacity-20"> {/* Added opacity for a subtle background */}
          <span className="text-6xl">{icon || '🖥️'}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={demoLink} className="text-blue-500 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={githubLink} className="text-blue-500 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;