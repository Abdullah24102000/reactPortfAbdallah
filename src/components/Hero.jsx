import profilePic from "../assets/me.jpg";
import {HERO_CONTENT} from "../constants/index.js";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center lg:mt-18">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-10 text-4xl tracking-tight lg:mt-0 lg:text-6xl">Abdullah Hasan</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Frontend Developer</span>
                <p className="my-0 max-w-xl py-4 font-light tracking-tighter">
                {HERO_CONTENT}
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <img className="rounded-4xl w-64 h-64" src={profilePic} alt="Abdullah Hassan Pic" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
