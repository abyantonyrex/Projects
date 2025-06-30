import React from 'react';
import Button from './CvBtn';

  

const Navigation = ({ onShowSidebar, onDownloadCV }) => {
  return (
    <nav
      id="main-bars"
      className="bg-black text-[var(--font-color)] p-4"
    >
      <ul className="flex flex-row items-center justify-end text-2xl font-bold space-x-4">
        
        <li id="logo" className="mr-auto px-10 text-3xl md:text-2xl sm:text-xl">
          <a href="#">Portfolio</a>
        </li>

        {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
          <li key={i} className="hideOnMobile">
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}

        <li
          id="menu-bar"
          onClick={onShowSidebar}
          className="py-5 px-10 rounded-xl hidden cursor-pointer"
          style={{ backgroundColor: 'var(--bg-blue)' }}
        >
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#000000"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>

        <li>
          <Button onDownloadCV={onDownloadCV} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
