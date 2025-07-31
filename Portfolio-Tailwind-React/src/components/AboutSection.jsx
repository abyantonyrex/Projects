import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abyimg from "../img/aby-ghibili-pic.png";
import TypewriterLoop from "./TypewriterText";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 400, once: false });
  }, []);

  return (
    <section className="border-b-2 border-gray-500 min-h-screen pt-24 bg-[url('/image/bg-main.jpg')] bg-cover bg-center relative text-white">
      {/* Title */}
      <div
        id="about"
        className="flex justify-center items-center mb-10 text-3xl sm:text-5xl font-bold absolute top-5 left-1/2 transform -translate-x-1/2"
      >
        <h1>About Me</h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-10 px-4 mt-10">
        {/* Image (1st on sm↓, 2nd on md↑) */}
        <div
          className="w-full sm:w-4/5 md:w-1/3 flex justify-center order-1 sm:order-1 md:order-2"
          data-aos="zoom-in"
        >
          <img
            className=" xsm:w-3/4 sm:w-4/6 md:w-64 lg:w-4/6 xl:w-11/12 rounded-3xl  animate-float z-10"
            src={abyimg}
            alt="Aby Antony Rex"
            loading="lazy"
          />
        </div>

        {/* Profile Card (2nd on sm↓, 1st on md↑) */}
        <div className="w-full sm:w-4/5 md:w-1/3 order-2 sm:order-2 md:order-1">
          <div
            className="flex flex-col justify-center items-center gap-4 p-6 border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition bg-white/10 backdrop-blur-md"
            data-aos="fade-up"
          >
            <h2 className="text-purple-400 text-2xl sm:text-3xl font-semibold text-center xsm:text-white xsm:text-shadow-lg">
              Hi 👋 Everyone
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-purple-400 xsm:text-white xsm:text-shadow-lg text-center">
              I'm Aby Antony Rex
            </p>
            <TypewriterLoop
              texts={[
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              speed={100}
              pause={1500}
              className="text-lg sm:text-xl font-medium"
            />
            <div className="flex justify-center">
              <a
                href="#contact"
                aria-label="Go to contact section"
                className="inline-block border border-purple-200 bg-purple-600 hover:border-transparent hover:text-white active:bg-purple-700 rounded-md px-4 py-2 mt-4"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Description (always 3rd) */}
        <div className="w-full sm:w-4/5 md:w-1/3 relative flex justify-center order-3">
          <div className="animate-pulse-fast absolute z-0 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-20 blur-3xl" />
          <div className="relative z-10 w-full max-w-md p-6 border border-white/20 bg-white/10 text-center shadow-2xl ring-2 ring-purple-400/30 backdrop-blur-lg rounded-3xl">
            <p className="text-sm sm:text-lg leading-relaxed tracking-wide text-white">
              I'm a passionate{" "}
              <span className="font-medium text-purple-300">web developer</span>{" "}
              who loves building dynamic, interactive websites and apps. I enjoy
              working with <span className="text-yellow-300">HTML</span>,{" "}
              <span className="text-blue-400">CSS</span>,{" "}
              <span className="text-yellow-400">JavaScript</span>, and{" "}
              <span className="text-blue-300">React</span>. On the server side, I
              use <span className="text-green-400">Node.js</span>,{" "}
              <span className="text-emerald-400">Express</span>, and{" "}
              <span className="text-indigo-400">MongoDB</span>. I'm always excited
              to learn, grow, and take on{" "}
              <span className="font-medium text-pink-400">new challenges</span>{" "}
              with creativity and energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
