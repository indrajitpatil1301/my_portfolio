import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs'; // Add icons for dark mode toggle

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode); // Toggle 'dark' class on the root element
  };

  return (
    <header
      className={`${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
      } p-6 shadow-md flex justify-between items-center transition-colors duration-300`}
    >
      <div className="flex items-center">
        <div className="text-4xl font-bold text-orange-500"></div>
      </div>

    

      {/* Menu button for mobile view */}
      <button
        className="block md:hidden focus:outline-none"
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </button>

      {/* Main navigation */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:space-x-8 md:items-center absolute md:static top-16 left-0 w-full md:w-auto ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        } md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 z-50`}
      >
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="block md:inline cursor-pointer hover:text-orange-500 py-2 md:py-0"
        >
          Portfolio
        </Link>
        <Link
          to="aboutme"
          smooth={true}
          duration={500}
          className="block md:inline cursor-pointer hover:text-orange-500 py-2 md:py-0"
        >
          About Me
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          className="block md:inline cursor-pointer hover:text-orange-500 py-2 md:py-0"
        >
          Technologies
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="block md:inline cursor-pointer hover:text-orange-500 py-2 md:py-0"
        >
          Projects
        </Link>
        <Link
          to="contactme"
          smooth={true}
          duration={500}
          className="block md:inline cursor-pointer hover:text-orange-500 py-2 md:py-0"
        >
          Contact Me
        </Link>
          {/* Theme toggle button */}
      <button
        onClick={handleThemeToggle}
        className="text-2xl focus:outline-none mr-4"
      >
        {isDarkMode ? <BsSun className="text-yellow-500" /> : <BsMoon />}
      </button>
      </nav>
    </header>
  );
};

export default Header;
