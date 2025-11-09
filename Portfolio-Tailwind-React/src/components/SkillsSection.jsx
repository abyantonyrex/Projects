import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import s1 from "../img/html-png-removebg-preview.webp";
import s2 from "../img/css-png-removebg-preview.webp";
import s3 from "../img/js-png-removebg-preview.webp";
import s4 from "../img/react-png-removebg-preview.webp";
import s5 from "../img/tailwind-png-removebg-preview.webp";
import s6 from "../img/bootstrap-png-removebg-preview.webp";
import s7 from "../img/node-png-removebg-preview.webp";
import s8 from "../img/express-png-removebg-preview.webp";
import s9 from "../img/mysql-png-removebg-preview.webp";
import s10 from "../img/mongodb-png-removebg-preview.webp";
import s11 from "../img/java-png-removebg-preview.webp";
import s12 from "../img/springboot-png-removebg-preview.webp";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  const skills = [
    {
      name: "HTML",
      image: s1,
      description: "HTML structures and presents content on the web.",
    },
    {
      name: "CSS",
      image: s2,
      description: "CSS styles web pages by controlling layout and design.",
    },
    {
      name: "JavaScript",
      image: s3,
      description: "JavaScript enables interactivity and dynamic behavior.",
    },
    {
      name: "React",
      image: s4,
      description: "React builds UI components efficiently.",
    },
    {
      name: "Tailwind",
      image: s5,
      description: "Tailwind CSS is a utility-first framework.",
    },
    {
      name: "Bootstrap",
      image: s6,
      description: "Bootstrap helps create responsive designs quickly.",
    },
    {
      name: "Node JS",
      image: s7,
      description: "Node.js runs JavaScript on the backend.",
    },
    {
      name: "Express JS",
      image: s8,
      description: "Express is a minimal Node.js framework.",
    },
    {
      name: "MySQL",
      image: s9,
      description: "MySQL stores structured data relationally.",
    },
    {
      name: "MongoDB",
      image: s10,
      description: "MongoDB stores flexible NoSQL documents.",
    },
    {
      name: "Java",
      image: s11,
      description: "Java builds cross-platform applications.",
    },
    {
      name: "Spring Boot",
      image: s12,
      description: "Spring Boot simplifies Java backend work.",
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-gray-500 bg-[url('/image/bg-main.jpg')] bg-cover bg-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-center py-10 text-[var(--bg-blue)]">
        Skills
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-md p-4 sm:p-5 transition duration-300 group hover:scale-105"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img
              src={skill.image}
              alt={`${skill.name} logo`}
              className="w-10 h-10 sm:w-14 sm:h-14 mb-2 object-contain"
            />
            <span className="text-sm sm:text-base font-semibold text-white">
              {skill.name}
            </span>

            <p className="hidden sm:block text-xs font-medium text-purple-300 text-center mt-1 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
