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
import Animation from "./tAnimation.jsx";

import { TypeAnimation } from "react-type-animation";
import MySkills from "./MySkills";

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
      link: "My Experiences",
      section: "experience",
      component: <Experience />,
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
          <p className="mt-3 text-2xl"> Freelance Web Developer </p>
          <p className="mt-10 text-lg">
            I’m offering a reliable and professional service to help bring your
            business website to life.
          </p>
          <br />
          <p>
            Technical Stacks {"=>"}{" "}
            <span
              id="mutitext"
              className="bg-blue-500 font-bold p-1 rounded-md"
            >
              {Animation()}
            </span>
          </p>
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
                  offset={-30}
                  activeClass="bg-green-500 rounded-md p-2 "
                  className=" hover:text-green-500 "
                >
                  {link.link}
                </Link>
                <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
              </li>
            );
          })}
        </ul>

        <div className="mt-2">
          <a
            href="/assets/myResume/Sai_Aung_Wann_TH.pdf"
            download="Sai_Aung_Wann_TH.pdf"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center w-[200px]"
          >
            <svg
              className="w-4 h-4 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>MY RESUME</span>
          </a>

          <div className="text-white mt-2 flex items-center justify-between w-[200px] h-[50px]">
            <LINK to={"https://github.com/SaiAungWann"}>
              <img
                src={Gitbub}
                alt=""
                className="w-8 rounded-full hover:w-10"
              />
            </LINK>
            <LINK
              to={
                "https://www.linkedin.com/in/sai-aung-wann-%E4%BD%99%E8%8F%AB%E5%A4%A9"
              }
            >
              <img
                src={Linkedin}
                alt=""
                className="w-8 rounded-md hover:w-10"
              />
            </LINK>

            <LINK to={"https://wa.me/66645659400?text=Hello"}>
              <img
                src={Whatsapp}
                alt=""
                className="w-8 rounded-full hover:w-10"
              />
            </LINK>

            <LINK to={"https://line.me/R/ti/p/sai1line18"}>
              <img src={Line} alt="" className="w-8 rounded-md hover:w-10" />
            </LINK>
          </div>
        </div>
      </div>
    </div>
  );
}
