import React from 'react'

const AboutSection = () => {
  return (
    <section>
      <div>
        <div id="about-me" className="flex justify-center items-center mt-10 mb-10 text-6xl">
          <h1>About Me</h1>
        </div>

        <div className="flex flex-col gap-2 p-8 sm:p-8 sm:items-center place-content-start">
          <div
            id="profile-card"
            className="flex items-center gap-4 p-10 border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl hover:cursor-pointer"
          >
            <img 
              className="h-56 w-56 rounded-full aby-img" 
              src="/src/img/aby-ghibili-pic.png" 
              alt="Aby Antony Rex" 
            />
            <div className="space-y-2 text-center sm:text-left sm:font-light">
              <div className="space-y-0.5">
                <h2 className="text-purple-400 text-3xl font-semibold">Hi 👋</h2>
                <p className="text-2xl font-semibold text-purple-400 flex justify-center sm:justify-start">
                  I'm, Aby Antony Rex
                </p>
                <p className="font-medium text-white">Full Stack Web Developer</p>
              </div>
              <a href="#contact">
                <button className="border border-purple-200 bg-purple-600 hover:border-transparent hover:text-white active:bg-purple-700 rounded-md px-4 py-2 m-2 message">
                Get in Touch
              </button>
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-20 mb-20 flex items-center justify-center overflow-hidden px-4">
          {/* Background Animated Blob */}
          <div className="animate-pulse-fast absolute z-0 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-20 blur-3xl"></div>

          {/* Card Content */}
          <div className="animate-fade-in-up relative z-10 max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl ring-2 ring-purple-400/30 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:shadow-purple-600/30 desc">
            <p className="text-lg leading-relaxed tracking-wide text-white sm:text-xl">
              I'm a passionate{' '}
              <span className="font-medium text-purple-300">web developer</span> who loves building dynamic,
              interactive websites and apps. I enjoy working with{' '}
              <span className="text-yellow-300">HTML</span>,{' '}
              <span className="text-blue-400">CSS</span>,{' '}
              <span className="text-yellow-400">JavaScript</span>, and{' '}
              <span className="text-blue-300">React</span>. On the server side, I use{' '}
              <span className="text-green-400">Node.js</span>,{' '}
              <span className="text-emerald-400">Express</span>, and{' '}
              <span className="text-indigo-400">MongoDB</span>. I'm always excited to learn, grow, and take on{' '}
              <span className="font-medium text-pink-400">new challenges</span> with creativity and energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection