import React from 'react';
import aboutImg from '../assets/aboutImg.jpg';
import {ABOUT_TEXT} from '../constants/index.js';
import { motion } from "motion/react";

const About = () => {
return (
    <div className= 'border-b border-neutral-900 pb-4 lg:mb-35'>
        <h2 className='my-20 text-center text-4xl'>
            About
            <span className='text-neutral-500'> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={aboutImg} className='grayscale-40 rounded-4xl w-80' alt="Abdallah Hasan" />
                </div>
                
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className='my-2 max-w-xl py-7'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
)
}

export default About
