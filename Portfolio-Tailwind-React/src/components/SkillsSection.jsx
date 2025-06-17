import React from 'react'

const SkillsSection = () => {
  const skills = [
    {
      name: 'HTML',
      image: '/Portfolio-Tailwind/src/img/html-png-removebg-preview.png',
      description: 'HTML (HyperText Markup Language) structures and presents content on the web.'
    },
    {
      name: 'CSS',
      image: '/Portfolio-Tailwind/src/img/css-png-removebg-preview.png',
      description: 'CSS (Cascading Style Sheets) styles web pages by controlling layout and design.'
    },
    {
      name: 'JavaScript',
      image: '/Portfolio-Tailwind/src/img/js-png-removebg-preview.png',
      description: 'JavaScript enables interactivity and dynamic behavior in web pages.'
    },
    {
      name: 'React',
      image: '/Portfolio-Tailwind/src/img/react-png-removebg-preview.png',
      description: 'React is a JavaScript library for building UI components efficiently.'
    },
    {
      name: 'Tailwind',
      image: '/Portfolio-Tailwind/src/img/tailwind-png-removebg-preview.png',
      description: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.'
    },
    {
      name: 'Bootstrap',
      image: '/Portfolio-Tailwind/src/img/bootstrap-png-removebg-preview.png',
      description: 'Bootstrap is a popular CSS framework for responsive web design.'
    },
    {
      name: 'Node JS',
      image: '/Portfolio-Tailwind/src/img/node-png-removebg-preview.png',
      description: 'Node.js allows JavaScript to run on the server side for backend development.'
    },
    {
      name: 'Express JS',
      image: '/Portfolio-Tailwind/src/img/express-png-removebg-preview.png',
      description: 'Express.js is a minimal web framework for building APIs with Node.js.'
    },
    {
      name: 'MySQL',
      image: '/Portfolio-Tailwind/src/img/mysql-png-removebg-preview.png',
      description: 'MySQL is a relational database system used for structured data storage.'
    },
    {
      name: 'MongoDB',
      image: '/Portfolio-Tailwind/src/img/mongodb-png-removebg-preview.png',
      description: 'MongoDB is a NoSQL database that stores data in flexible JSON-like documents.'
    },
    {
      name: 'Java',
      image: '/Portfolio-Tailwind/src/img/java-png-removebg-preview.png',
      description: 'Java is a versatile programming language for building applications.'
    },
    {
      name: 'Spring Boot',
      image: '/Portfolio-Tailwind/src/img/springboot-png-removebg-preview.png',
      description: 'Spring Boot simplifies Java backend development with built-in tools.'
    }
  ]

  return (
    <section className="py-22" id="skills" style={{ backgroundColor: 'var(--dark-bg)' }}>
      <h1 className="text-6xl font-bold text-center py-20 mb-10" style={{ color: 'var(--bg-blue)' }}>
        Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-15 max-w-6xl mx-auto px-4 skills-section">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-3xl shadow-md p-4 hover:shadow-lg transition duration-400 group skill-card"
          >
            <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-2" />
            <span className="text-lg font-semibold text-white">{skill.name}</span>
            <p className="text-sm font-bold text-purple-600 text-center mt-2 transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 ease-in-out">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection