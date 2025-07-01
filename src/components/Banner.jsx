import React from "react";
import profile from "../assets/pic.png";
import text from "../assets/rolling-text.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { SiJavascript, SiMongodb } from "react-icons/si";
import { HiDownload } from "react-icons/hi";

import "../App.css";

const Banner = () => {
  return (
    <section className="relative bg-[#fdf5f3] flex justify-center items-center px-4 overflow-hidden md:py-40 py-20 ">
      {/* Socials Left */}
      <div className="flex -bottom-10 gap-4 md:flex absolute left-19 md:left-3  -translate-y-1/2 md:flex-col md:items-center space-y-5 z-50">
        <p className="hidden md:block text-sm font-bold text-gray-800 mb-2">Find Me:</p>
       
        <a
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="w-7 h-7  md:w-12 md:h-12 flex items-center justify-center md:border-2 md:border-emerald-500 rounded-full text-black hover:bg-emerald-500 hover:text-white transition"
>
  <FaGithub size={20} />
</a>

        <a
          href="#"
          className="w-7 h-7  md:w-12 md:h-12  flex items-center justify-center md:border-2 md:border-emerald-500 rounded-full text-black hover:bg-emerald-500 hover:text-white transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          className="w-7 h-7  md:w-12 md:h-12  flex items-center justify-center md:border-2  md:border-emerald-500 rounded-full text-black hover:bg-emerald-500 hover:text-white transition"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="/resume.pdf"
          download
          className="w-7 h-7  md:w-12 md:h-12 flex items-center justify-center md:border-2 md:border-emerald-500 rounded-full text-black hover:bg-emerald-500 hover:text-white transition"
          title="Download Resume"
        >
          <HiDownload size={22} />
        </a>
      </div>

      {/* Skills Right */}
      <div className="hidden -bottom-10 md:flex absolute right-4 top-2/3 -translate-y-1/2 flex-col items-center space-y-5">
        <p className="text-sm font-bold text-gray-800 mb-2">Skills:</p>
        <div className="w-12 h-12 flex items-center justify-center border-2 border-emerald-500 rounded-full text-black hover:bg-emerald-500 hover:text-white transition">
          <SiJavascript size={20} />
        </div>
        <div className="w-12 h-12 flex items-center justify-center border-2 border-emerald-500 rounded-full text-black hover:bg-emerald-500 hover:text-white transition">
          <FaReact size={20} />
        </div>
        <div className="w-12 h-12 flex items-center justify-center border-2 border-emerald-500 rounded-full text-black hover:bg-emerald-500 hover:text-white transition">
          <SiMongodb size={20} />
        </div>
        <div className="w-12 h-12 flex items-center justify-center border-2 border-emerald-500 rounded-full text-black hover:bg-emerald-500 hover:text-white transition">
          <FaJava size={20} />
        </div>
        <div className="w-12 h-12 flex items-center justify-center border-2 border-emerald-500 rounded-full text-black hover:bg-emerald-500 hover:text-white transition">
          <FaGitAlt size={20} />
        </div>
      </div>

      {/* Center Image + Circular Text */}
      <div className="items-center z-10 relative w-full h-full">
        {/* Rolling Text */}
        <img src={text} alt="" className="circle-text w-[14%] absolute top-0 md:left-20 left-0 max-w-[100%] mx-auto md:w-[13%]" />
      
        {/* Profile image */}
        <img
          src={profile}
          alt="ibrahim"
          className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65vw] max-w-[100%] sm:max-w-[100%] md:w-[40%] z-10"
        />

        {/* Text */}
        <h1 className="text-center mt-12 sm:mt-20">
          <span className="text-[55px] sm:text-[100px]  md:text-[250px] head text-white border-black block leading-none -top-9  md:top-0 md:left-0 relative" style={{ WebkitTextStroke: "1px black" }}>
            Full Stack
          </span>
          <span className="text-[40px] sm:text-[80px] md:text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-black via-gray-900 to-black relative z-10 -top-4 ">
            Developer
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Banner;
