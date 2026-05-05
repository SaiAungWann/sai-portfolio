import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import MySkills from "./MySkills";
import Menu from "./Menu";
import Detail from "./Detail";
import Contact from "./Contact";
import MyCerts from "./MyCert";


export default function Home() {
  return (
    <div className="w-full relative space-y-2">
      <div className="sticky top-0 w-full bg-transparent z-50 md:hidden p-2">
        <div className="w-full bg-gray-800 rounded-xl shadow-lg">
           <Menu />
        </div>
      </div>
        <About />
        <MySkills />
        <MyCerts />
        <Projects />
    </div>
  );
}
