import React from "react";
import logo from "../assets/images/logo.png"; // Adjust path as needed
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={logo} // Dynamically imported logo
                alt="Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 lg:space-x-14 text-sm sm:text-base">
            {/* Adjust space on mobile to space-x-4, sm to space-x-6, and lg to space-x-8 */}
            <Link
              to="/about"
              className="font-bold text-white hover:text-blue-500 transition duration-200"
            >
              About
            </Link>
            <Link
              to="/services"
              className="font-bold text-white hover:text-blue-500 transition duration-200"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="font-bold text-white hover:text-blue-500 transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;