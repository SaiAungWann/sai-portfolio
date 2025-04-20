import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

function MySkills() {
  return (
    <>
      <div id="skills" className="m-10 font-serif text-white">
        <h1 className="text-2xl text-white">SKILLS .....</h1>
        <div className=" justify-start mt-5 text-4xl space-x-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-4">
          <FaHtml5 className="text-red-500 " />
          <FaCss3 className="text-orange-500" />
          <FaBootstrap className=" text-purple-500" />
          <FaJs className="text-yellow-500" />
          <RiTailwindCssFill className="text-blue-500 " />
          <SiMysql className="text-blue-500" />
          <SiMongodb className="text-green-500" />
          <p className="text-xl text-yellow-500">ExpressJS</p>
          <FaReact className="text-blue-500" />
          <FaNodeJs className="text-green-600" />
          <FaPhp className="text-blue-600" />
          <FaLaravel className="text-red-500" />
          <SiLivewire className="text-red-500" />
          <RiFirebaseLine className="text-orange-500" />
        </div>
      </div>
    </>
  );
}

export default MySkills;
