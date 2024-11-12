import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiOracle, SiJenkins, SiSoap, SiBootstrap, SiTailwindcss, SiMongodb, SiExpress, SiFigma, SiSvelte } from 'react-icons/si';

const technologies = [
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-indigo-500' },
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-600' },
  { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
  { name: 'SvelteKit', icon: SiSvelte, color: 'text-orange-600' },
];

const TechnologyPage = () => {
  return (
    <section id="technologies" className="bg-white dark:bg-gray-900 py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center transition-transform transform hover:scale-110"
              >
                <IconComponent className={`${tech.color} text-6xl mb-4`} />
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPage;
