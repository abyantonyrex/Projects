import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9x4vwzw",
        "template_92kn6sk",
        form.current,
        "PerDUjF4fmeA5yFPU"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message. Try again.");
        console.error(error.text);
      });
  };
  return (
    <div className="bg-[url('/image/bg-main.jpg')] bg-cover bg-center max-h-screen py-10 px-4" id="contact">
      {/* Contact Heading */}
      <h1
        className="text-center  text-4xl sm:text-5xl font-extrabold mt-20 mb-6"
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
            <label
              htmlFor="name"
              className="block text-lg font-medium text-black mb-1"
            >
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
            <label
              htmlFor="email"
              className="block text-lg font-medium text-black mb-1"
            >
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
            <label
              htmlFor="message"
              className="block text-lg font-medium text-black mb-1"
            >
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
    </div>
  );
};

export default ContactForm;
