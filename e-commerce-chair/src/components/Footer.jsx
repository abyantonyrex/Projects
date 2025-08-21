import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      {/* Copyright */}
      <div className="text-center mb-4">
        <p>© 2025 E-Commerce Chair. All rights reserved.</p>
      </div>

      {/* Social Links */}
      <div className="text-center">
        <p className="font-bold text-lg mb-2">Follow us on:</p>
        <nav>
          <ul className="flex justify-center space-x-6 text-xl">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
