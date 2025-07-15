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
        <FaLinkedin/>
        <FaGithub/>
        <FaSquareXTwitter/>
        <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar
