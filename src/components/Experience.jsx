import React from 'react';
import { EXPERIENCES } from '../constants/index.js';
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:0.5}}
      className='my-20 text-center text-4xl'>Experience</motion.h2>
      <div className="">
        {EXPERIENCES.map((Experience, index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{Experience.year}</p>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="w-full max-w-xl lg:w-3/4 flex flex-wrap gap-2">
                    <h6 className='mb-2 font-semibold'>
                        {Experience.role} <span className='text-sm text-purple-100'>{Experience.company}</span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>{Experience.description}</p>
                    {Experience.technologies.map((tech, index)=>(
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-800'>{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
