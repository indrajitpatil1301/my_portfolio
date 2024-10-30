import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiOracle, SiJenkins, SiSoap, SiBootstrap, SiTailwindcss, SiMongodb, SiExpress, SiFigma, SiSvelte } from 'react-icons/si';

const technologies = [
  // { name: 'Java', icon: FaJava },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Bootstrap', icon: SiBootstrap },
  // { name: 'MySQL', icon: SiMysql },
  // { name: 'Oracle', icon: SiOracle },
  // { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Git', icon: FaGitAlt },
  // { name: 'Jenkins', icon: SiJenkins },
  // { name: 'JUnit', icon: SiJunit },
  // { name: 'SOAP Web Services', icon: SiSoap },
  { name: 'Tailwind CSS', icon: SiTailwindcss }, // Added Tailwind CSS
  { name: 'MongoDB', icon: SiMongodb }, // Added MongoDB
  { name: 'Express', icon: SiExpress }, // Added Express
  { name: 'Figma', icon: SiFigma }, // Added Figma
  { name: 'SvelteKit', icon: SiSvelte }, // Added SvelteKit
];

const TechnologyPage = () => {
  return (
    <section id="technologies" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <IconComponent className="text-6xl text-blue-500 mb-4" />
                <p className="text-lg font-medium text-gray-700">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPage;
