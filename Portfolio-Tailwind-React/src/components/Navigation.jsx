import React, { useState } from "react";
import Button from "./CvBtn";

const Menu = ["About", "Skills", "Projects", "Contact"];

const Navigation = ({ onShowSidebar, onDownloadCV }) => {
  const [active, setActive] = useState("");

  return (
    <nav id="main-bars" className="bg-black text-[var(--font-color)] p-4 w-full">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    
    {/* Left: Logo */}
    <div className="flex-shrink-0 text-3xl md:text-2xl sm:text-xl scale-100 sm:scale-90">
      <a href="#">Portfolio</a>
    </div>

    {/* Center: Menu Items */}
    <ul className="hidden md:flex flex-1 justify-center space-x-6 text-xl font-bold">
      {Menu.map((item, i) => (
        <li
          key={i}
          className={`rounded-xl transition duration-300 ease-in-out ${
            active === item
              ? "bg-violet-600 text-black"
              : "hover:bg-gray-700 text-[var(--font-color)]"
          }`}
        >
          <a
            href={`#${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            className="block px-4 py-2 rounded-lg"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>

    {/* Right: CV Button and Mobile Menu Icon */}
    <div className="flex items-center space-x-3">
      {/* CV Button (visible on medium and up) */}
      <div className="hidden md:flex">
        <Button onDownloadCV={onDownloadCV} />
      </div>

      {/* Mobile Menu Icon (only on small screens) */}
      <div
        id="menu-bar"
        onClick={onShowSidebar}
        className="md:hidden flex items-center justify-center bg-[var(--bg-blue)] px-3 py-2 rounded-xl cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="26px"
          viewBox="0 -960 960 960"
          width="26px"
          fill="#000000"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navigation;
