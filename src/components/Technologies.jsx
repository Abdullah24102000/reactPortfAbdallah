import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiGithub, SiGit } from "react-icons/si";
import { motion } from "motion/react";
import { animate } from "motion";

const iconSwim = (duration) => ({
initial:{y:-10},
animate:{
y:[10,-10],
transition:{
  duration:duration,
  ease:"linear",
  repeat:Infinity,
  repeatType:"reverse",
}
},
});

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconSwim(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiHtml5 className='text-5xl text-orange-600' />
        </motion.div>
        <motion.div
        variants={iconSwim(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCss3 className='text-5xl text-blue-500' />
        </motion.div>
        <motion.div
        variants={iconSwim(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiBootstrap className='text-5xl text-purple-500' />
        </motion.div>
        <motion.div
        variants={iconSwim(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className='text-5xl text-sky-400' />
        </motion.div>
        <motion.div
        variants={iconSwim(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className='text-5xl text-yellow-400' />
        </motion.div>
        <motion.div
        variants={iconSwim(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiReact className='text-5xl text-cyan-400' />
        </motion.div>
        <motion.div
        variants={iconSwim(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGit className='text-5xl text-red-600' />
        </motion.div>
        <motion.div
        variants={iconSwim(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGithub className='text-5xl text-netural-800' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
