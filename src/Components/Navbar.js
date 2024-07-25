import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of animations
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-blue-600  text-white p-4 sticky top-0 z-50"
      data-aos="zoom-in"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            to="/"
            className="flex items-center space-x-4"
            data-aos="fade-right"
          >
            <img src={logo} alt="School Logo" className="h-12 md:h-16" />
            <span className="text-lg md:text-2xl font-bold">
              Springdale Public School
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="block md:hidden ml-4"
            data-aos="fade-left"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center md:space-x-4 w-full md:w-auto mt-4 md:mt-0 md:ml-64`}
          data-aos="fade-up"
        >
          <Link
            to="/"
            className="hover:underline block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:underline block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/academics"
            className="hover:underline block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Academics
          </Link>
          <Link
            to="/admissions"
            className="hover:underline block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Admissions
          </Link>
          <Link
            to="/faculty"
            className="hover:underline block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Faculty
          </Link>
          <Link
            to="/students"
            className="hover:underline block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Students
          </Link>
          <Link
            to="/gallery"
            className="hover:underline block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact-us"
            className="hover:underline block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
