import profilePic from "../assets/Me.jpg";
import {HERO_CONTENT} from "../constants/index.js";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center lg:mt-18">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-10 text-4xl tracking-tight lg:mt-0 lg:text-6xl">Abdullah Hasan</motion.h1>
                <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Frontend Developer</motion.span>
                <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-0 max-w-xl py-4 font-light tracking-tighter">
                {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <motion.img
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1}}
            className="rounded-4xl w-75 h-75" src={profilePic} alt="Abdullah Hassan Pic" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
