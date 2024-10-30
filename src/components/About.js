import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiSvelte } from 'react-icons/si';

const AboutMe = () => {
  return (
    <section id="aboutme" className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="indrajit5.jpeg" alt="Illustration" className="w-full h-full rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 mb-4">
            Hello! I'm a passionate frontend developer with a knack for creating visually appealing and user-friendly websites. I enjoy bringing designs to life with clean and efficient code.
          </p>
          <p className="text-gray-600 mb-4">
            With a strong background in HTML, CSS, JavaScript, and React, I have experience in building responsive and dynamic web applications. I am constantly learning new technologies and improving my skills to stay up-to-date with industry trends.
          </p>
          <p className="text-gray-600 mb-4">
            When I'm not coding, you can find me exploring new design trends, reading tech blogs, or working on side projects to experiment with new ideas.
          </p>
          <div className="flex space-x-4 mt-8">
            <FaHtml5 className="text-4xl text-orange-500" />
            <FaCss3Alt className="text-4xl text-blue-500" />
            <FaJs className="text-4xl text-yellow-500" />
            <FaReact className="text-4xl text-blue-400" />
            <FaNodeJs className="text-4xl text-green-500" />
            <SiSvelte className="text-4xl text-orange-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
