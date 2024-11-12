import React from "react";

const Projects = () => {
  return (
    <section id="projects" className=" p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center mb-6">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Cmet-rs Recruitment Application
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This platform developed the application form for cmet-rs recruitment. The application used SvelteKit as the frontend and Node.js/Fastify as the backend stateless server.
          </p>
          <div className="mt-6">
            <span className="block text-gray-700 font-bold uppercase dark:text-gray-400">
              Technology Stack:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              SvelteKit, TailwindCSS, Node.js, Fastify, MongoDB
            </span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            KCB Recruitment Application
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This platform developed the application form for KCB recruitment. The application used SvelteKit as the frontend and Node.js/Fastify as the backend stateless server.
          </p>
          <div className="mt-6">
            <span className="block text-gray-700 font-bold uppercase dark:text-gray-400">
              Technology Stack:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              SvelteKit, TailwindCSS, Node.js, Fastify, MongoDB
            </span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Movano Inc Admin Portal
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            The application manages Movano ring devices, partners, firmware, and app versions. It uses React and Redux for the frontend, and Node.js/Fastify for the backend.
          </p>
          <div className="mt-6">
            <span className="block text-gray-700 font-bold uppercase dark:text-gray-400">
              Technology Stack:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              React, Redux, Node.js, Fastify, DynamoDB, AWS, CoreUI, Bootstrap
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
