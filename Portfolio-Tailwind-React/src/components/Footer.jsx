import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/abyantonyrex/Projects',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/aby-antony-rex',
    },
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:abyrex2002@example.com',
    },
    {
      name: 'Naukri',
      icon: faBriefcase,
      url: 'https://www.naukri.com/mnjuser/profile',
    },
  ];

  return (
    <footer className="py-10 px-4 sm:px-6 bg-[url('/image/bg-main.jpg')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-lg">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="flex items-center gap-3 hover:text-cyan-400 transition justify-center"
          >
            <FontAwesomeIcon icon={link.icon} className="text-cyan-400" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      <p className="text-center text-white mt-10 text-xs sm:text-sm leading-snug font-bold">
        &copy; {new Date().getFullYear()} Aby Antony Rex. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
