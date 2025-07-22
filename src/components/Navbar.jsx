import React from 'react';
import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Abdallah" className='w-11 h-9.5 mx-2'/>
        </div>
        <div className='flex items-center justify-center gap-4 text-2xl text-white'>
        <a href='https://www.linkedin.com/in/abdullah7asan/'><FaLinkedin/></a>
        <a href='https://github.com/Abdullah24102000'><FaGithub/></a>
        <a href='https://x.com/EngAbdulla81967?t=XWT41hUhSI0RWRsGBrjqdQ&s=08'><FaSquareXTwitter/></a>
        <a href='https://www.instagram.com/3bdullaho1?igsh=MXdzOW9pdTdiN2t4Ng=='><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar
