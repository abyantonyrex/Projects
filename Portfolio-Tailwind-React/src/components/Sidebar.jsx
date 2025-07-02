import React from 'react';

const Sidebar = ({ visible, onHide }) => {
  return (
    <nav
      id="sidebar"
      className={`fixed top-0 right-0 h-screen w-full sm:w-[250px] z-[999] bg-black 
        shadow-[var(--box-shadow-bg)] transform transition-transform duration-500
        ${visible ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <ul className="font-medium text-2xl w-full flex flex-col items-start justify-start">

        {/* Close Button */}
        <li className="py-5 px-10 flex justify-center">
          <button
            onClick={onHide}
            aria-label="Close Sidebar"
            className="bg-transparent border-none p-0 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="#00fffb"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </li>

        {/* Sidebar Navigation Links */}
        {[
          { label: 'About', href: '#about-me' },
          { label: 'Skills', href: '#skills' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' },
        ].map((item, i) => (
          <li
            key={i}
            className="p-8 text-4xl w-full hover:bg-gray-500 text-[var(--font-color)]"
          >
            <a
              className="flex justify-center"
              href={item.href}
              onClick={onHide}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
