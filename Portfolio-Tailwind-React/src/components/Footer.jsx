import React from 'react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'Github',
      icon: 'fab fa-github',
      url: 'https://github.com/abyantonyrex/Projects'
    },
    {
      name: 'Whatsapp',
      icon: 'fab fa-whatsapp',
      url: '#'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: '#'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      url: '#'
    }
  ]

  return (
    <footer>
      <h1 className="flex justify-center items-center mt-10 text-6xl font-bold p-5 mb-8" id="contact">
        Contact Me
      </h1>
      <div className="grid grid-cols-2 justify-center content-center text-3xl sm:grid-cols-4 md:grid-cols-4 gap-6 max-w-6xl mx-auto pb-8 footer-section">
        {socialLinks.map((link, index) => (
          <div key={index}>
            <a 
              href={link.url} 
              className="social" 
              target={link.url !== '#' ? '_blank' : '_self'} 
              rel={link.url !== '#' ? 'noopener noreferrer' : ''}
            >
              <i className={link.icon}></i>
              <span>{link.name}</span>
            </a>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer