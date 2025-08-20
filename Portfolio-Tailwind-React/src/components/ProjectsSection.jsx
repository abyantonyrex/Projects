import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "/src/img/abyproject.webp";
import p2 from "/src/img/abycart.webp";
import p3 from "/src/img/calci.webp";
import p4 from "/src/img/portfolio.webp";
import p5 from "/src/img/p5.webp"; 

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
        "A backend-driven product management app built with Node.js, Express, MySQL, MongoDB, and EJS. Includes secure authentication, CRUD operations, and real-time inventory updates.",
      techStack: ["Node.js", "Express", "MySQL", "EJS", "MongoDB"],
    },
    {
      title: "E-Commerce AbyCart",
      image: p2,
      url: "https://abycart.netlify.app/",
      description:
        "A full-stack e-commerce web app using HTML, CSS, JavaScript, Node.js, and MySQL. Supports user authentication, product listings, and cart management.",
      techStack: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
      title: "User Management System",
      image: p5, 
      url: "https://react-workouts-six.vercel.app/",
      description:
        "A full-stack web application for managing users. Includes features to add, view, edit, and delete users. Built using Spring Boot and React with PostgreSQL integration.",
      techStack: ["React", "Bootstrap", "Spring Boot", "PostgreSQL", "Render"],
    },

    {
      title: "Personal Portfolio",
      image: p4,
      url: "https://abyrex-portfolio.vercel.app/",
      description:
        "A responsive portfolio site showcasing my skills, projects, and background. Built with HTML, CSS, and a mobile-first design.",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Smart Calculator",
      image: p3,
      url: "https://abycalculator.netlify.app/",
      description:
        "A JavaScript-based calculator supporting basic arithmetic operations. Designed with a clean UI and responsive layout.",
      techStack: ["HTML", "CSS", "JavaScript"],
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
    <div className="border-b-2 border-gray-500 py-32 bg-[url('/image/bg-main.jpg')] bg-cover bg-center"  id="projects">
      <section className=" ">
        <h2 className="text-6xl font-bold text-center mb-16">Projects</h2>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-12 px-6 max-w-11xl  mx-auto ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-900 rounded-3xl transition duration-300 hover:shadow-2xl shadow-cyan-glow"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h3 className="text-2xl text-center p-6 text-white font-semibold ">
                {project.title}
              </h3>

              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="rounded-3xl w-full max-w-sm h-[180px] object-cover cursor-pointer transition-transform duration-500 hover:scale-95 hover:shadow-lg mx-auto mb-6"
              />
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className=" px-3 py-1 rounded-full text-sm  text-greenyellow border-0 border-greenyellow shadow-[0_0_0_2px_#ADFF2F]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-md text-center text-gray-200 w-11/12 md:w-2/3 mx-auto p-4 mb-4">
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
