import React from "react";
import Word from "../assets/photos/WORD-2.png";
import autocad from "../assets/photos/CAD.png"
import excle from "../assets/photos/EXCLE-2.png"
import revit from "../assets/photos/revit.png"
import navisworks from "../assets/photos/NAV.png"
import PowerPoint from "../assets/photos/POWERPOINT-2.png"
import Sketchup from "../assets/photos/SKETCHUP.png"
import Etabs from "../assets/photos/etabs.png"
import CapCut from "../assets/photos/CapCut.png"
import SAFE from "../assets/photos/SAFE22.png"

function MySkills() {
  const skills = [   autocad ,  revit, navisworks, PowerPoint, excle, Word, Sketchup , Etabs, SAFE,  CapCut
    ];
  return (
    <>
      <div id="skills" className=" my-5 mx-10 font-serif text-white border-b border-gray-700 pb-2 scroll-mt-75">
        <h1 className="text-2xl text-white">SKILLS .....</h1>
        <div className=" justify-start mt-4 text-4xl space-x-2 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-4">
          {/* <img src="" alt="" sizes="" srcset="" /> */}
          {skills.map((skill)=>(
            <div className=" justify-start w-10 sm:w-10 md:w-10 lg:w-20 mx-auto">
              <img
                key={skill.id} 
                src={skill}
                className=" w-10 sm:w-10 md:w-10 lg:w-20 mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MySkills;
