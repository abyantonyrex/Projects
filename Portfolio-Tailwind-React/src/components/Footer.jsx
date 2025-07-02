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
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        alert('Failed to send message. Try again.');
        console.error(error.text);
      });
  };

  const socialLinks = [
    {
      name: 'GitHub',
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
      {/* Contact Heading */}
      <h1
        id="contact"
        className="text-center text-white text-4xl sm:text-5xl font-extrabold mt-20 mb-6"
      >
        Contact Me
      </h1>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-blue-100 p-6 rounded-xl shadow-lg mb-16"
      >
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-black mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-black mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-black mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Your message"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Footer Section */}
      <footer className="bg-black py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-lg">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex items-center gap-3 hover:text-cyan-400 transition text-center justify-center"
            >
              <i className={`${link.icon} text-cyan-400`}></i>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10 text-xs sm:text-sm leading-snug break-words">
          &copy; {new Date().getFullYear()} Aby Antony Rex. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
