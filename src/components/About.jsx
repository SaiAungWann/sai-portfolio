import React, { useState } from "react";
import MyPhoto1 from "../assets/photos/My-photo-4.jpg";
import Animation from "./tAnimation.jsx";
import Contact from "./Contact.jsx";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const SeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="about" className="m-10 mt-10 font-serif text-white ">
      <div className="flex items-center justify-center">
        <img src={MyPhoto1} alt="" className="w-[300px] rounded-full " />
      </div>
      <div className="md:hidden flex flex-col justify-center items-center">
        <p className="text-4xl">Sai Aung Wann</p>
        <p className="mt-3 text-2xl"> Freelance Web Developer </p>
        <p>
          Technical Stacks {"=>"}{" "}
          <span id="mutitext" className="bg-blue-500 font-bold p-1 rounded-md">
            {Animation()}
          </span>
        </p>
        <div className=" md:hidden mt-4">
          <Contact />
        </div>
      </div>
      <div className={` ${isExpanded ? "" : "line-clamp-3"}`}>
        <p className="mt-5 text-justify">
          Hi, I’m <span className="text-xl font-bold">Sai Aung Wann</span> — a
          former civil engineer who unexpectedly found a deep passion for web
          development. My journey began in Myanmar, where I worked in site
          construction and project management. Later in Singapore, I dove into
          online learning through Code Wall Technology, mastering the
          fundamentals of HTML, CSS, Bootstrap, and JavaScript.
        </p>
        <p className="mt-5 text-justify">
          With <span className="font-semibold">Creative Coder Myanmar</span>, I
          explored more advanced web development concepts including ES6, Git &
          GitHub, and React.js. I also gained hands-on experience with Firebase
          for backend integration, along with full-stack technologies like the
          MERN (MongoDB, ExpressJS, ReactJS and NodeJS) and PHP-Laravel stacks —
          empowering me to build fully functional web apps with authentication,
          databases, and smooth hosting. Now, I’m{" "}
          <span className="text-xl font-bold">READY</span> to bring powerful,
          seamless web applications to life — from frontend to backend.
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
