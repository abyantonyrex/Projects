import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abyimg from "../img/aby-ghibili-pic.png";
import TypewriterLoop from "./TypewriterText";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true , easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative text-white border-b-2 border-gray-500 pt-24 bg-cover bg-center bg-[url('/image/bg-main.jpg')]"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <header className="text-center mb-12">
          <h1
            id="about-title"
            className="text-3xl sm:text-5xl font-bold tracking-tight"
          >
            About Me
          </h1>
        </header>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image Section */}
          <div
            className="w-full sm:w-4/5 md:w-1/3 flex justify-center order-1 md:order-2"
            data-aos="zoom-in"
          >
            <img
              src={abyimg}
              alt="Aby Antony Rex"
              loading="lazy"
              decoding="async"
              className="w-3/4 sm:w-4/6 md:w-64 lg:w-4/6 xl:w-11/12 rounded-3xl shadow-2xl ring-1 ring-white/10 motion-safe:animate-float z-10"
            />
          </div>

          {/* Profile Card */}
          <div
            className="w-full sm:w-4/5 md:w-1/3 order-2 md:order-1"
            data-aos="fade-up"
          >
            <div className="flex flex-col justify-center items-center gap-4 p-6 border border-white/20 rounded-2xl shadow-xl transition bg-white/10 backdrop-blur-md hover:shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center">
                Hi 👋 Everyone
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-center">
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
                className="text-lg sm:text-xl font-medium text-purple-200"
              />

              <a
                href="#contact"
                className="inline-block border border-purple-200 bg-purple-600 hover:border-transparent hover:bg-purple-700 active:bg-purple-800 text-white rounded-md px-4 py-2 mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Description Box */}
          <div
            className="w-full sm:w-4/5 md:w-1/3 relative flex justify-center order-3"
            data-aos="zoom-in"
          >
            {/* Glowing Gradient Background */}
            <div className="motion-safe:animate-pulse absolute -z-0 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-20 blur-3xl" />

            <div className="relative z-10 w-full max-w-md p-6 border border-white/20 bg-white/10 text-center shadow-2xl ring-2 ring-purple-400/30 backdrop-blur-lg rounded-3xl">
              <p className="text-sm sm:text-lg leading-relaxed tracking-wide">
                I'm a passionate{" "}
                <span className="font-medium text-purple-300">web developer</span>{" "}
                who loves building dynamic, interactive websites and apps. I enjoy
                working with <span className="text-yellow-300">HTML</span>,{" "}
                <span className="text-blue-400">CSS</span>,{" "}
                <span className="text-yellow-400">JavaScript</span>, and{" "}
                <span className="text-sky-300">React</span>. On the server side, I
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
      </div>
    </section>
  );
};

export default AboutSection;
