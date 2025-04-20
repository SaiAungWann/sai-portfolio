import React from "react";
import Experience from "../components/Experience";
import Project from "../components/Projects";
import About from "../components/About";
import MySkills from "./MySkills";
import { Link } from "react-scroll";

function Menu() {
  const links = [
    {
      link: "About",
      section: "about",
      component: <About />,
    },
    {
      link: "Skills",
      section: "skills",
      component: <MySkills />,
    },
    {
      link: "Experiences",
      section: "experience",
      component: <Experience />,
    },

    {
      link: "Projects",
      section: "project",
      component: <Project />,
    },
  ];
  return (
    <>
      <nav className="">
        <ul className=" space-y-1 font-serif text-2xl text-white list-none flex justify-around items-center underline p-1">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="text-lg cursor-pointer group text-center"
              >
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
      </nav>
    </>
  );
}

export default Menu;
