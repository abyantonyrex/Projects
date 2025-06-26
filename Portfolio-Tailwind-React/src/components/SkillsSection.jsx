import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import s1 from '/src/img/html-png-removebg-preview.png';
import s2 from '/src/img/css-png-removebg-preview.png';
import s3 from '/src/img/js-png-removebg-preview.png';
import s4 from '/src/img/react-png-removebg-preview.png';
import s5 from '/src/img/tailwind-png-removebg-preview.png';
import s6 from '/src/img/bootstrap-png-removebg-preview.png';
import s7 from '/src/img/node-png-removebg-preview.png';
import s8 from '/src/img/express-png-removebg-preview.png';
import s9 from '/src/img/mysql-png-removebg-preview.png';
import s10 from '/src/img/mongodb-png-removebg-preview.png';
import s11 from '/src/img/java-png-removebg-preview.png';
import s12 from '/src/img/springboot-png-removebg-preview.png';

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  const skills = [
    { name: 'HTML', image: s1, description: 'HTML structures and presents content on the web.' },
    { name: 'CSS', image: s2, description: 'CSS styles web pages by controlling layout and design.' },
    { name: 'JavaScript', image: s3, description: 'JavaScript enables interactivity and dynamic behavior.' },
    { name: 'React', image: s4, description: 'React builds UI components efficiently.' },
    { name: 'Tailwind', image: s5, description: 'Tailwind CSS is a utility-first framework.' },
    { name: 'Bootstrap', image: s6, description: 'Bootstrap helps create responsive designs quickly.' },
    { name: 'Node JS', image: s7, description: 'Node.js runs JavaScript on the backend.' },
    { name: 'Express JS', image: s8, description: 'Express is a minimal Node.js framework.' },
    { name: 'MySQL', image: s9, description: 'MySQL stores structured data relationally.' },
    { name: 'MongoDB', image: s10, description: 'MongoDB stores flexible NoSQL documents.' },
    { name: 'Java', image: s11, description: 'Java builds cross-platform applications.' },
    { name: 'Spring Boot', image: s12, description: 'Spring Boot simplifies Java backend work.' }
  ];

  return (
    <section
      id="skills"
      className="py-20 border-b-2 border-gray-500 mb-10"
      style={{ backgroundColor: 'var(--dark-bg)' }}
    >
      <h1 className="text-6xl font-bold text-center mb-16" style={{ color: 'var(--bg-blue)' }}>
        Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg p-6 transition duration-300 group hover:scale-105"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-4" />
            <span className="text-lg font-semibold text-white">{skill.name}</span>

            {/* Always visible on mobile; hover reveal on larger screens */}
            <p className="text-sm font-medium text-purple-300 text-center mt-2 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition duration-300 ease-in-out">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
