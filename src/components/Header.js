import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-white p-6 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-4xl font-bold text-orange-500">IP.</div>
      </div>
      <nav className="flex space-x-8">
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-700 hover:text-orange-500"
        >
          Portfolio
        </Link>
        <Link
          to="aboutme"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-700 hover:text-orange-500"
        >
          About Me
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-700 hover:text-orange-500"
        >
        Technologies
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-700 hover:text-orange-500"
        >
          Projects
        </Link>
        <Link
          to="contactme"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-700 hover:text-orange-500"
        >
          Contact Me
        </Link>
      </nav>
      {/* <button
        className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
      >
        Contact Me
      </button> */}
    </header>
  );
};

export default Header;

