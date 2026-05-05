import React, { useState } from "react";
import Gitbub from "../assets/svgs/github.svg";
import Line from "../assets/svgs/line.svg";
import Linkedin from "../assets/svgs/linkedin.svg";
import Whatsapp from "../assets/svgs/whatsapp.svg";
import Experience from "../components/Experience";
import Project from "../components/Projects";
import About from "../components/About";
import { Link } from "react-scroll";
import { Link as LINK } from "react-router-dom";
import { useEffect } from "react";
import eduAnimation from "./eduAnimation.jsx";
import certAnimation from "./certAnimation.jsx";
import Contact from "./Contact.jsx";

import { TypeAnimation } from "react-type-animation";
import MySkills from "./MySkills";
import MyCerts from "./MyCert.jsx";


export default function Detail({}) {
  const links = [
    {
      link: "About Me",
      section: "about",
      component: <About />,
    },
    {
      link: "My Skills",
      section: "skills",
      component: <MySkills />,
    },
    {
      link: "My Certificates",
      section: "certs",
      component: <MyCerts />,
    },

    {
      link: "My Projects",
      section: "project",
      component: <Project />,
    },
  ];
       const [isExpanded, setIsExpanded] = useState(false);
 
       const SeeMore = () => {
         setIsExpanded(!isExpanded);
       };
  return (
    <div className=" w-full md:max-w-2/7 lg:h-fit md:h-[400px] lg:max-w-3/10 text-white font-serif fixed">
      <div className="">
        <div className="">
          <p className="text-4xl">Sai Aung Wann</p>
          <p className="mt-3 text-2xl"> BIM Modeller (A & S) </p>
          {/* <p className="mt-5 text-lg text-justify " > */}
          <p className={`mt-5 text-lg text-justify ${isExpanded ? "" : "line-clamp-3"}`} >
            I’m a dedicated BIM Modeller providing reliable and professional modelling services to bring construction and design concepts into coordinated digital models.
          </p>
            <p 
        className=" text-gray-400 cursor-pointer hover:underline"
        onClick={SeeMore}
      >
        {isExpanded ? "See less" : "See more"} .....
      </p>
          <p className=" mt-3">
            Educational Background {"=>"}{" "} <br />
            <span
              id="mutitext"
              className="font-bold p-1 rounded-md"
            >
              {eduAnimation()}

            </span>
          </p>
          <p className="mt-2">
            Certificate of Completion {"=>"}{" "} <br />
            <span
              id="mutitext"
              className="font-bold p-1 rounded-md"
            >
              {certAnimation()}
            </span>
          </p> <br />
          <p>Zeon Light Training Center - Autodesk Authorized Training Center </p>

        </div>
        <ul className="mt-5 space-y-1 font-serif text-2xl text-white list-none flex items-center justify-between xxl:flex-none">
          {links.map((link, index) => {
            return (
              <li key={index} className="text-lg cursor-pointer group ">
                <Link
                  to={link.section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  activeClass="bg-green-500 rounded-md p-2 "
                  className=" hover:text-blue-500 "
                >
                  {link.link}
                </Link>
                <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
              </li>
            );
          })}
        </ul>
          <Contact/>
      </div>
    </div>
  );
}
