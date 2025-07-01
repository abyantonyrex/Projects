import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abyimg from "/src/img/aby-ghibili-pic.png";
import TypewriterLoop from "./TypewriterText";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 400, once: false });
  }, []);

  return (
    <section className="border-b-2 border-gray-500 mb-10" id="about">
      {/* Title */}
      <div className="flex justify-center items-center mt-10 mb-10 text-5xl sm:text-6xl font-bold">
        <h1>About Me</h1>
      </div>

      {/* Profile Card */}
      <div className="flex flex-col gap-2 px-6 sm:px-8 sm:items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
        <div
          id="profile-card"
          className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition"
          data-aos="fade-up"
        >
          <img
            className="w-40 sm:w-52 lg:w-56 rounded-full animate-float"
            src={abyimg}
            alt="Aby Antony Rex"
          />
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-purple-400 text-2xl sm:text-3xl font-semibold">Hi 👋</h2>
            <p className="text-xl sm:text-2xl font-semibold text-purple-400">
              I'm Aby Antony Rex
            </p>
            <TypewriterLoop
              texts={[
                "Full Stack Developer",
                "Frontend Developer",
                "UI/UX Enthusiast",
              ]}
              speed={100}
              pause={1500}
              className="text-lg sm:text-xl font-medium"
            />
          </div>
            <a href="#contact">
              <button className="border border-purple-200 bg-purple-600 hover:border-transparent hover:text-white active:bg-purple-700 rounded-md px-4 py-2 mt-4">
                Get in Touch
              </button>
            </a>
        </div>
      </div>

      {/* Description */}
      <div className="relative mt-20 mb-20 flex items-center justify-center overflow-hidden px-4">
        {/* Animated Blob */}
        <div className="animate-pulse-fast absolute z-0 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-20 blur-3xl"></div>

        {/* Description Card */}
        <div className="relative z-10 max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 sm:p-10 text-center shadow-2xl ring-2 ring-purple-400/30 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:shadow-purple-600/30 desc">
          <p className="text-base sm:text-lg leading-relaxed tracking-wide text-white">
            I'm a passionate{" "}
            <span className="font-medium text-purple-300">web developer</span>{" "}
            who loves building dynamic, interactive websites and apps. I enjoy
            working with <span className="text-yellow-300">HTML</span>,{" "}
            <span className="text-blue-400">CSS</span>,{" "}
            <span className="text-yellow-400">JavaScript</span>, and{" "}
            <span className="text-blue-300">React</span>. On the server side, I
            use <span className="text-green-400">Node.js</span>,{" "}
            <span className="text-emerald-400">Express</span>, and{" "}
            <span className="text-indigo-400">MongoDB</span>. I'm always
            excited to learn, grow, and take on{" "}
            <span className="font-medium text-pink-400">new challenges</span>{" "}
            with creativity and energy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
