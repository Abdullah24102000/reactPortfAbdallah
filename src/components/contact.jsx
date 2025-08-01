import React from 'react';
import { CONTACT } from '../constants/index.js';
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0, y: -90}}
      transition={{duration:0.5}}
      className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
        whileInView={{opacity:1,scale:1.2}}
        initial={{opacity:0, scale:0}}
        transition={{duration:0.5}}
        className='my-4'>{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{opacity:1,scale:1}}
        initial={{opacity:0, scale:0}}
        transition={{duration:1}}
        className='my-4'>{CONTACT.phoneNo}</motion.p>
        <a
        href={`mailto:${CONTACT.email}`} className='border-b'>
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
