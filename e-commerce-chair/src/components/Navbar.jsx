import { useState } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";


const iconLinks = [
  {
    to: "/register",
    label: "Account",
    path: "M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z",
  },
  {
    to: "/cart",
    label: "Cart",
    path: "M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z",
  },
  {
    to: "/wishlist",
    label: "Wishlist",
    path: "m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-200 text-white sticky top-0 z-50 font-poppins shadow-md">
      <div className=" px-4 flex justify-around items-center h-20 text-black">

        {/* Logo */}
        <Link to="/home">
          {" "}
          <img
            src="/grk-logo.png"
            alt="grk logo"
            className="flex justify-start w-40 h-20 sm:w-27 sm:h-15 max-xsm:w-20 max-xsm:h-10"
          />
        </Link>
        {/* Searchbar */}
        <Searchbar />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-xl font-semibold">
          <li>
            {/* <a href="#" className="hover:text-green-700">
              Home
            </a> */}
            <Link to="/" className="hover:text-green-700">
              Home
            </Link>
          </li>
          <li>
            {/* <a href="#" className="hover:text-green-700">
              About Us
            </a> */}
            <Link to="/about-us" className="hover:text-green-700">
              About
            </Link>
          </li>
          <li>
            {/* <a href="#" className="hover:text-green-700">
              Products
            </a> */}
            <Link to="/products" className="hover:text-green-700">
              Products
            </Link>
          </li>
          <li>
            {/* <a href="#" className="hover:text-green-700">
              Contact Us
            </a> */}
            <Link to="/contact-us" className="hover:text-green-700">
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart Icon */}
        <div className="flex items-center gap-2">
          {iconLinks.map(({ to, label, path }) => (
            <Link
              key={to}
              to={to}
              aria-label={label}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-6 h-6 xsm:w-5 xsm:h-5 xxsm:w-4 xxsm:h-4 fill-[#e3e3e3]"
              >
                <path d={path} />
              </svg>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black px-4 pb-4 flex flex-col gap-4 justify-center items-center text-xl font-semibold">
          <li className="border-b border-gray-600 w-full text-center py-2">
            {/* <a href="#" className="hover:text-gray-200 ">
              Home
            </a> */}
            <Link
              to="/"
              className="hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-b border-gray-600 w-full text-center pb-2">
            {/* <a href="#" className="hover:text-gray-200">
              About
            </a> */}
            <Link
              to="/about-us"
              className="hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="border-b border-gray-600 w-full text-center pb-2">
            {/* <a href="#" className="hover:text-gray-200">
              Services
            </a> */}
            <Link
              to="/products"
              className="hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            {/* <a href="#" className="hover:text-gray-200">
              Contact
            </a> */}
            <Link
              to="/contact-us"
              className="hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
