import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import MySkills from "./MySkills";
import Menu from "./Menu";
export default function Home() {
  return (
    <div className="w-full relative">
      <div className=" sticky m-2 top-0 bg-gray-800  rounded-xl z-50 md:hidden">
        <Menu />
      </div>
      <About />
      <MySkills />
      <Experience />
      <Projects />
    </div>
  );
}
