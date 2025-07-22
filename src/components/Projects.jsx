import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index, link) => {
    if (!link) {
      setActiveIndex(index);
      return;
    }

    if (activeIndex === index) {
      window.open(link, '_blank');
    } else {
      setActiveIndex(index);
    }
  };

  const columns = 4;

  return (
    <div className='border-b border-neutral-900 pb-12'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className='my-12 text-center text-3xl font-bold'
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {PROJECTS.map((project, index) => {
          const isActive = activeIndex === index;
          const col = index % columns;
          const from = col < columns / 2 ? -50 : 50;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: from }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative w-52 h-72 rounded-lg overflow-hidden shadow-md border border-neutral-800 group cursor-pointer`}
              onClick={() => handleClick(index, project.link)}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-110' : ''}`}
              />

              <div
                className={`absolute inset-0 flex flex-col justify-end ${isActive ? 'bg-black/30 backdrop-blur-md' : ''} transition duration-500 p-4`}
              >
                <div className="overflow-hidden">
                  <div className={`transition-all duration-500 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <h6 className='text-white text-base font-semibold mb-1'>{project.title}</h6>
                    <p className='text-xs text-neutral-200 mb-2'>{project.description}</p>
                    <div className='flex flex-wrap'>
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='mr-1 mb-1 rounded bg-neutral-800/70 px-2 py-0.5 text-[10px] text-purple-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
