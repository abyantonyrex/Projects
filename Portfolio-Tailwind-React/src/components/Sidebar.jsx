import React from 'react'

const Sidebar = ({ visible, onHide }) => {
  return (
    <nav 
      id="sidebar" 
      className={visible ? 'block' : 'hidden'}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        width: '250px',
        zIndex: 999,
        boxShadow: 'var(--box-shadow-bg)'
      }}
    >
      <ul className="font-medium text-2xl w-full flex flex-col items-start justify-start">
        <li onClick={onHide} className="py-5 px-10">
          <a className="flex justify-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#00fffb">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li className="p-8 text-4xl w-full hover:bg-gray-500" style={{ color: 'var(--font-color)' }}>
          <a className="flex justify-center" href="#" onClick={onHide}>About</a>
        </li>
        <li className="p-8 text-4xl w-full hover:bg-gray-500" style={{ color: 'var(--font-color)' }}>
          <a className="flex justify-center" href="#skills" onClick={onHide}>Skills</a>
        </li>
        <li className="p-8 text-4xl w-full hover:bg-gray-500" style={{ color: 'var(--font-color)' }}>
          <a className="flex justify-center" href="#projects" onClick={onHide}>Projects</a>
        </li>
        <li className="p-8 text-4xl w-full hover:bg-gray-500" style={{ color: 'var(--font-color)' }}>
          <a className="flex justify-center" href="#contact" onClick={onHide}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar