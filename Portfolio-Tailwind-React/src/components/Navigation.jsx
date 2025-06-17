import React from 'react'

const Navigation = ({ onShowSidebar, onDownloadCV }) => {
  return (
    <nav id="main-bars" className="bg-black p-4" style={{ color: 'var(--font-color)' }}>
      <ul className="flex space-x-4 flex-row items-center justify-end text-2xl font-bold">
        <li id="logo" className="px-10 mr-auto text-3xl md:text-2xl">
          <a href="#">Portfolio</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">About</a>
        </li>
        <li className="hideOnMobile">
          <a href="#skills">Skills</a>
        </li>
        <li className="hideOnMobile">
          <a href="#projects">Projects</a>
        </li>
        <li className="hideOnMobile">
          <a href="#contact">Contact</a>
        </li>
        <li 
          id="menu-bar" 
          onClick={onShowSidebar} 
          className="py-5 px-10 rounded-xl hidden"
          style={{ backgroundColor: 'var(--bg-blue)' }}
        >
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000000">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
        <li>
          <button 
            id="CV-button" 
            className="resume-btn" 
            type="button" 
            aria-label="Download CV"
            onClick={onDownloadCV}
          >
            Download CV
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation