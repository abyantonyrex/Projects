import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "/src/img/abyproject.gif";
import p2 from "/src/img/abycart.png";
import p3 from "/src/img/calci.png";
import p4 from "/src/img/portfolio.png";



const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 400, once: false }); 
  }, []);
  const projects = [
    {
      title: "Product Mangement System",
      image: p1,
      url: "https://inventorynode.netlify.app/",
      description:
        "A backend-driven product management app built with Node.js, Express, MySQL, and EJS. Includes secure authentication, CRUD operations for products, and real-time inventory updates.",
      animationClass: "slideInFromRight",
    },
    {
      title: "AbyCart",
      image: p2,
      url: "https://abycart.netlify.app/",
      description:
        "A full-stack e-commerce web app built using HTML, CSS, JavaScript, Node.js, and MySQL. Supports user authentication, product listings, and cart management.",
      animationClass: "slideInFromLeft",
    },

    {
      title: "Smart Calculator",
      image: p3,
      url: "https://abycalculator.netlify.app/",
      description:
        "A simple JavaScript-based calculator that supports basic arithmetic operations. Designed with a clean UI and responsive layout.",
      animationClass: "slideInFromRight",
    },
    {
      title: "Personal Portfolio",
      image: p4,
      url: "https://aby-portfolio.netlify.app/",
      description:
        "A responsive portfolio website showcasing my skills, projects, and background. Built with HTML, CSS, and a mobile-first design.",
      animationClass: "slideInFromLeft",
    },
  ];

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("Project URL not found");
    }
  };

  return (
    <section id="projects" >
      <h2 className="flex justify-center items-center mt-10 text-6xl font-bold p-10 mb-10">
        Projects
      </h2>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 p-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
            <h3 className="flex justify-center items-center text-4xl p-10 project-title">
              {project.title}
            </h3>
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              className={`${project.animationClass} rounded-3xl  w-2/3 h-2/3 cursor-pointer  transition-transform duration-500 hover:scale-95 hover:shadow-lg mx-auto mb-10`}
              onClick={() => handleProjectClick(project.url)}
            />
            <p className="flex content-center text-xl my-15 text-center w-2/3 mx-auto p-4 project-description mb-20">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
