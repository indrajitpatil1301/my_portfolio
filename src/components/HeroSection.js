import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-purple-50 flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-light mb-4">Hello I'm A</h1>
          <h2 className="text-5xl font-bold mb-4">
    Frontend <span className="text-yellow-500">Developer</span>.
          </h2>
          <p className="text-gray-600 mb-8">
            Hi I'm Indrajit Patil, a passionate Frontend developer based in Pune. Welcome to my portfolio.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
            <a href="/" className="text-white bg-yellow-500 p-3 rounded-full hover:bg-purple-700">
              <FaFacebookF />
            </a>
            <a href="/" className="text-white bg-yellow-500 p-3 rounded-full hover:bg-purple-700">
              <FaTwitter />
            </a>
            <a href="/" className="text-white bg-yellow-500 p-3 rounded-full hover:bg-purple-700">
              <FaInstagram />
            </a>
            <a href="/" className="text-white bg-yellow-500 p-3 rounded-full hover:bg-purple-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <div className="relative w-full max-w-sm mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-purple-200 rounded-full -z-10"></div>
            <img src="/indrajit.jpeg" alt="Profile" className="rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
