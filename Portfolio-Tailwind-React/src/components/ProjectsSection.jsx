import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "/src/img/abyproject.gif";
import p2 from "/src/img/abycart.png";
import p3 from "/src/img/calci.png";
import p4 from "/src/img/portfolio.png";

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  const projects = [
    {
      title: "Product Management System",
      image: p1,
      url: "https://projects-dw77.onrender.com/",
      description:
        "A backend-driven product management app built with Node.js, Express, MySQL, and EJS. Includes secure authentication, CRUD operations, and real-time inventory updates.",
    },
    {
      title: "AbyCart",
      image: p2,
      url: "https://abycart.netlify.app/",
      description:
        "A full-stack e-commerce web app using HTML, CSS, JavaScript, Node.js, and MySQL. Supports user authentication, product listings, and cart management.",
    },
    {
      title: "Personal Portfolio",
      image: p4,
      url: "https://abyrex-portfolio.vercel.app/",
      description:
        "A responsive portfolio site showcasing my skills, projects, and background. Built with HTML, CSS, and a mobile-first design.",
    },
    {
      title: "Smart Calculator",
      image: p3,
      url: "https://abycalculator.netlify.app/",
      description:
        "A JavaScript-based calculator supporting basic arithmetic operations. Designed with a clean UI and responsive layout.",
    },
  ];

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.error("Project URL not found");
    }
  };

  return (
    <div className="border-b-2 border-gray-500 mb-10 py-20 ">
    <section id="projects" className=" ">
      <h2 className="text-6xl font-bold text-center mb-16">Projects</h2>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-12 px-6 max-w-7xl mx-auto ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-gray-900 rounded-3xl transition duration-300 hover:shadow-2xl shadow-cyan-glow"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <h3 className="text-4xl text-center p-6 text-white font-semibold ">
              {project.title}
            </h3>

            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="rounded-3xl w-full max-w-md h-auto cursor-pointer transition-transform duration-500 hover:scale-95 hover:shadow-lg mx-auto mb-6"
              onClick={() => handleProjectClick(project.url)}
            />

            <p className="text-xl text-center text-gray-200 w-11/12 md:w-2/3 mx-auto p-4 mb-4">
              {project.description}
            </p>

            <div className="flex justify-center mb-10">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default ProjectsSection;
