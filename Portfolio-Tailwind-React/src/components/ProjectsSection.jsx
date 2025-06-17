import React from 'react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AbyCart',
      image: '/Portfolio-Tailwind/src/img/abycart.png',
      url: 'https://abycart.netlify.app/',
      description: 'A full-stack e-commerce web app built using HTML, CSS, JavaScript, Node.js, and MySQL. Supports user authentication, product listings, and cart management.',
      animationClass: 'slideInFromLeft'
    },
    {
      title: 'Smart Calculator',
      image: '/Portfolio-Tailwind/src/img/calci.png',
      url: 'https://abycalculator.netlify.app/',
      description: 'A simple JavaScript-based calculator that supports basic arithmetic operations. Designed with a clean UI and responsive layout.',
      animationClass: 'slideInFromRight'
    },
    {
      title: 'Personal Portfolio',
      image: '/Portfolio-Tailwind/src/img/portfolio.png',
      url: 'https://aby-portfolio.netlify.app/',
      description: 'A responsive portfolio website showcasing my skills, projects, and background. Built with HTML, CSS, and a mobile-first design.',
      animationClass: 'slideInFromLeft'
    }
  ]

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, '_blank')
    } else {
      console.error('Project URL not found')
    }
  }

  return (
    <section id="projects">
      <h2 className="flex justify-center items-center mt-10 text-6xl font-bold p-10 mb-10">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="flex justify-center items-center text-4xl p-10 project-title">
              {project.title}
            </h3>
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              className={`${project.animationClass} rounded-3xl project-image`}
              onClick={() => handleProjectClick(project.url)}
            />
            <p className="flex content-center text-xl my-15">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection