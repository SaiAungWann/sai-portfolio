import React, { useState } from "react";
import MyPhoto1 from "../assets/photos/My-photo-4.jpg";
// import Animation from "./tAnimation.jsx";
import Contact from "./Contact.jsx";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const SeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="about" className="mx-10 my-5 font-serif text-white border-b border-gray-700 pb-2 scroll-mt-24">
      <div className="flex items-center justify-center">
        <img src={MyPhoto1} alt="" className="w-[300px] rounded-full " />
      </div>

      <div className={` ${isExpanded ? "" : "line-clamp-3"}`}>
        <div className="md:hidden text-center">
          <p className="text-4xl">Sai Aung Wann</p>
          <p className="mt-3 text-2xl"> BIM Modeller (A & S) </p>
        </div>
        <p className="mt-5 text-justify">
          Hi, I’m <span className="text-xl font-bold">Sai Aung Wann</span> — with over four years of experience as a Site Engineer in Singapore and Myanmar, with strong involvement in construction coordination and project execution. I am trained in <span className="text-xl font-bold">Building Information Modelling (BIM) </span> and have hands-on experience using <span className="text-xl font-bold">Autodesk Revit and Navisworks Manage</span>, focusing on <span className="text-xl font-bold">Architectural and Structural disciplines</span>. My expertise includes BIM modeling, custom parameter creation, Clash Detction and the development of 4D and 5D simulations and construction animations. I am also familiar with Fuzor for BIM 4D/5D presentation and visualization workflows. Although I currently do not have access to Fuzor due to licensing costs, I have a solid understanding of its functionality and am eager to further enhance my skills.
        </p> <br />
        <p>
          Previously, I worked as a Site Engineer cum Drafter for Heap Heng Metal PTE LTD Metal  Works for MRT (T-315), HDB and Condo Renovation and construction projects in Singapore. In Myanmar I worked as a Site Engineer cum BBS for SSJH Myanmar Co.,Ltd (Chinese Company) RCC residential building, hotel, apartment and shopping mall projects. Experienced in different cultures, languages, international company procedures and techniques. 

        </p>
      </div>
      <p 
        className=" text-gray-400 cursor-pointer hover:underline"
        onClick={SeeMore}
      >
        {isExpanded ? "See less" : "See more"} .....
      </p>
    </div>
  );
}
