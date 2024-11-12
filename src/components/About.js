import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSvelte } from "react-icons/si";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="indrajit5.jpeg"
            alt="Illustration"
            className="w-full h-full rounded-lg shadow-lg shadow-amber-100 dark:shadow-gray-800"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Hello! I'm a passionate Software Developer who loves creating
            visually appealing and user-friendly web applications. I take pride
            in bringing designs to life with clean, efficient, and scalable
            code.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            With a solid background in HTML, CSS, JavaScript, React, SvelteKit,
            and Node.js, I have a proven track record of building responsive and
            dynamic web applications. I am dedicated to continuous learning and
            constantly seek out new technologies and best practices to stay at
            the forefront of industry trends.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Beyond coding, I enjoy exploring emerging design concepts, reading
            tech blogs, and developing side projects to experiment with new
            ideas and hone my skills.
          </p>
          <div className="flex space-x-6 mt-8 justify-center lg:justify-start">
            <FaHtml5 className="text-4xl text-orange-500 hover:text-orange-600 transition duration-300" />
            <FaCss3Alt className="text-4xl text-blue-500 hover:text-blue-600 transition duration-300" />
            <FaJs className="text-4xl text-yellow-500 hover:text-yellow-600 transition duration-300" />
            <FaReact className="text-4xl text-blue-400 hover:text-blue-500 transition duration-300" />
            <FaNodeJs className="text-4xl text-green-500 hover:text-green-600 transition duration-300" />
            <SiSvelte className="text-4xl text-orange-600 hover:text-orange-700 transition duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
