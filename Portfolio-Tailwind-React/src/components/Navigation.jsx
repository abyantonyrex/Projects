import React, { useState } from "react";
import Button from "./CvBtn";

const Menu = ["About", "Skills", "Projects", "Contact"];

const Navigation = ({ onShowSidebar, onDownloadCV }) => {
  const [active, setActive] = useState("");

  return (
    <nav id="main-bars" className="bg-black text-[var(--font-color)] p-4">
     <ul className="flex items-center justify-between text-2xl font-bold px-4">
  {/* Logo */}
  <li
    id="logo"
    className="text-3xl md:text-2xl sm:text-xl scale-100 sm:scale-90"
  >
    <a href="#">Portfolio</a>
  </li>

  {/* Menu items (hidden on mobile) */}
  <div className="hidden md:flex space-x-4 ml-auto">
    {Menu.map((item, i) => (
      <li
        key={i}
        onClick={() => setActive(item)}
        className={`p-1 text-xl rounded-xl transition duration-300 ease-in-out ${
          active === item
            ? "bg-violet-600 text-black"
            : "hover:bg-gray-700 text-[var(--font-color)]"
        }`}
      >
        <a
          href={`#${item.toLowerCase()}`}
          className="block px-4 py-2 rounded-lg"
        >
          {item.replace("-", " ")}
        </a>
      </li>
    ))}
  </div>

  {/* Right section: CV Button + Menu icon */}
  <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
    <li id="CV-button" className="flex items-center">
      <Button onDownloadCV={onDownloadCV} />
    </li>

    <li
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
    </li>
  </div>
</ul>

    </nav>
  );
};

export default Navigation;
