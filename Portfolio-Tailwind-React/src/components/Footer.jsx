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
        (result) => {
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
      <h1 className="flex justify-center items-center mt-10 text-6xl  font-bold p-5 mb-4" id="contact">
        Contact Me
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto p-6 bg-blue-100 rounded-xl shadow-md mb-10"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg text-black font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-black font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg text-black font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            placeholder="Your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <footer> 
        <div className="grid grid-cols-2 justify-center content-center text-3xl sm:grid-cols-4 gap-6 max-w-6xl mx-auto p-8">
          {socialLinks.map((link, index) => (
            <div key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                <i className={`${link.icon} pr-3`}></i>
                {link.name}
              </a>
            </div>
          ))}
        </div>
          <p className='text-center p-5'>Copyright &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

export default Footer;
