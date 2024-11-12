import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import TypingEffect from 'react-typing-effect';

const HeroSection = () => {
  return (
    <section className="bg-purple-50 dark:bg-gray-900 flex items-center justify-center py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-light mb-4 text-gray-900 dark:text-white">
            Hello I'm A
          </h1>
          <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-yellow-500">
            <TypingEffect
              text={['Software Developer']}
              speed={100}
              eraseDelay={2000}
              className="text-yellow-500 dark:text-yellow-400"
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm Indrajit Patil, a passionate Software developer based in Pune. Welcome to my portfolio.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
            <a
              href="https://www.instagram.com/indrajiit.patil/profilecard/?igsh=ZzV4Nmpzb25ldXF1"
              className="text-white bg-yellow-500 p-3 rounded-full hover:bg-purple-700 dark:bg-yellow-400 dark:hover:bg-blue-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings"
              className="text-white bg-yellow-500 p-3 rounded-full hover:bg-blue-600 dark:bg-yellow-400 dark:hover:bg-blue-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/your-profile" // Replace with your Facebook profile URL
              className="text-white bg-yellow-500 p-3 rounded-full hover:bg-blue-600 dark:bg-yellow-400 dark:hover:bg-blue-500"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <div className="relative w-full max-w-sm mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-purple-600 rounded-full -z-10 shadow-lg"></div>
            <img
              src="/indrajit.jpeg"
              alt="Profile"
              className="rounded-full smooth-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
