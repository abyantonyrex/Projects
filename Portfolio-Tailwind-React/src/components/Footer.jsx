import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9x4vwzw',
        'template_92kn6sk',
        form.current,
        'PerDUjF4fmeA5yFPU'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Try again.');
          console.error(error.text);
        }
      );
  };

  const socialLinks = [
    {
      name: 'Github',
      icon: 'fab fa-github',
      url: 'https://github.com/abyantonyrex/Projects',
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/aby-antony-rex',
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:abyrex2002@example.com',
    },
    {
      name: 'Naukri',
      icon: 'fas fa-briefcase',
      url: 'https://www.naukri.com/mnjuser/profile',
    },
  ];

  return (
    <>
      {/* Contact Section Heading */}
      <h1
        id="contact"
        className="flex justify-center items-center mt-20 text-5xl sm:text-6xl font-bold p-5 mb-4 text-white"
      >
        Contact Me
      </h1>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto p-6 bg-blue-100 rounded-xl shadow-md mb-20 scale-95 sm:scale-100"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-black mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-black mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold text-black mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            placeholder="Your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <div className="flex justify-center pt-5">
          <button
            type="submit"
            className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Footer with Social Icons */}
      <footer className="bg-black py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto text-white text-lg px-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex items-center justify-center space-x-2 hover:text-blue-400 transition"
            >
              <i className={`${link.icon} text-xl text-[#00fffb] p-2 `}></i>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Aby Antony Rex. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
