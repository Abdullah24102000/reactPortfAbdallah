import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const goTo = (index) => {
    setActiveIndex((index + PROJECTS.length) % PROJECTS.length);
  };

  const handleCardClick = (link, isActive) => {
    if (isActive) {
      window.open(link, '_blank');
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) {
      goTo(activeIndex + 1);
    } else if (deltaX < -50) {
      goTo(activeIndex - 1);
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center py-10">
      <button
        onClick={() => goTo(activeIndex - 1)}
        className="absolute left-0 z-50 bg-black/70 text-white px-4 py-2 rounded-r"
        style={{ userSelect: 'none' }}
      >
        ◀
      </button>

      <div
        ref={containerRef}
        className="relative w-[300px] h-[450px] overflow-visible flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {PROJECTS.map((project, index) => {
          const isActive = index === activeIndex;
          const isHovered = hoveredIndex === index;
          const offset = index - activeIndex;
          const translateX = offset * 60;
          const scale = isActive ? 1 : 0.8;
          const zIndex = isActive ? 10 : 0;

          return (
            <motion.div
              key={index}
              className="absolute w-64 h-96 rounded-lg overflow-hidden shadow-xl cursor-pointer"
              style={{ zIndex }}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: 1,
                x: translateX,
                scale,
                filter: isActive ? 'brightness(1)' : 'brightness(0.6)',
              }}
              transition={{ duration: 0.6 }}
              onClick={() => handleCardClick(project.link, isActive)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <motion.div
                className="absolute inset-0 bg-black/60 text-white p-4 flex flex-col justify-end transition-opacity"
                animate={{ opacity: isActive || isHovered ? 1 : 0 }}
              >
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-700/70 text-xs px-2 py-0.5 rounded mr-1 mb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={() => goTo(activeIndex + 1)}
        className="absolute right-0 z-50 bg-black/70 text-white px-4 py-2 rounded-l"
        style={{ userSelect: 'none' }}
      >
        ▶
      </button>
    </div>
  );
};

export default ProjectsSlider;
