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

  return (
    <div className="  w-4/12 h-[600px] ml-5 text-white font-serif mt-5 fixed  ">
      <div className="">
        <div className="">
          <p className="text-4xl">Sai Aung Wann</p>
          <p className="mt-3 text-2xl"> BIM Modeller (A & S) </p>
          <p className="mt-10 text-lg">
            I’m a dedicated BIM Modeller providing reliable and professional modelling services to bring construction and design concepts into coordinated digital models.
          </p>
          <br />
          <p>
            Educational Background {"=>"}{" "}
            <span
              id="mutitext"
              className="bg-blue-500 font-bold p-1 rounded-md"
            >
              {eduAnimation()}

            </span>
          </p> <br />
          <p>
            Certificate of Completion {"=>"}{" "} <br />
            <span
              id="mutitext"
              className="bg-blue-500 font-bold p-1 rounded-md"
            >
              {certAnimation()}

            </span>
          </p> <br />
          <p>Zeon Light Training Center - Autodesk Authorized Training Center </p>

        </div>
        <ul className="mt-10 space-y-1 font-serif text-2xl text-white list-none">
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
