import React from "react";
import { Link } from "react-router-dom";
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
import ReadMoreText from "./ReadMoreText";
export default function Experience() {
  const experiences = [
    {
      id: 1,
      date: "Jan 2025 - Current",
      title: "Freelance Web Developer",
      company: "",
      description:
        "I’m currently working as a freelance web developer, specializing in building responsive, user-friendly websites using the latest technologies — with a strong focus on the React-Laravel stack.",
      skills: [
        { JavaScript: { icon: <FaJs />, className: "text-yellow-500" } },
        { React: { icon: <FaReact />, className: "text-blue-500" } },
        { PHP: { icon: <FaPhp />, className: "text-blue-600" } },
        { Laravel: { icon: <FaLaravel />, className: "text-red-500" } },
        { Livewire: { icon: <SiLivewire />, className: "text-red-500" } },
        {
          Tailwind: { icon: <RiTailwindCssFill />, className: "text-blue-500" },
        },
        { MySQL: { icon: <SiMysql />, className: "text-blue-600" } },
      ],
    },
    {
      id: 2,
      date: "Sep 2024 - Sep 2025",
      title: "PHP-Laravel Developer and Deployment",
      company: "Creative Coder Myanmar",
      description:
        " I’ve gained hands-on experience with PHP and the Laravel framework. As part of my learning journey, I built and launched a fully functional electronic eCommerce website. I also explored deploying the project using DigitalOcean, but ultimately held off to deploy due to cost considerations.",

      skills: [
        { PHP: { icon: <FaPhp />, className: "text-blue-600" } },
        { Laravel: { icon: <FaLaravel />, className: "text-red-500" } },
        {
          Tailwind: { icon: <RiTailwindCssFill />, className: "text-blue-500" },
        },
        { MySQL: { icon: <SiMysql />, className: "text-blue-600" } },
      ],
    },
    {
      id: 3,
      date: "May 2024 - Jan 2025",
      title: "Study MERN-Stack Developer",
      company: "Creative Coder Myanmar",
      description:
        "I’ve gained hands-on experience with technologies like MongoDB, Express.js, React, Node.js, Tailwind CSS, and a variety of useful NPM packages. Along the way, I built and launched a fully functional recipe website, and also developed several mini projects to sharpen my skills and explore new ideas.",
      skills: [
        { JavaScript: { icon: <FaJs />, className: "text-yellow-500" } },
        { React: { icon: <FaReact />, className: "text-blue-500" } },
        { NodeJS: { icon: <FaNodeJs />, className: "text-green-600" } },
        { MongoDB: { icon: <SiMongodb />, className: "text-green-500" } },

        {
          Tailwind: { icon: <RiTailwindCssFill />, className: "text-blue-500" },
        },
        {
          ExpressJS: {
            icon: <p className="text-xl text-yellow-500">ExpressJS</p>,
          },
        },
      ],
    },
    {
      id: 4,
      date: "DEC 2023 - Jan 2024",
      title: "Study React Developer",
      company: "Creative Coder Myanmar",
      description:
        "I’ve studied JavaScript, Vite & React, Tailwind CSS, and Firebase, which equipped me to build and launch several projects — including a library management app and a to-do list application. I’ve also created a variety of mini websites to continuously practice and refine my development skills.",
      skills: [
        { JavaScript: { icon: <FaJs />, className: "text-yellow-500" } },
        { React: { icon: <FaReact />, className: "text-blue-500" } },
        {
          Tailwind: { icon: <RiTailwindCssFill />, className: "text-blue-500" },
        },
        {
          Firebase: { icon: <RiFirebaseLine />, className: "text-orange-500" },
        },
      ],
    },
    {
      id: 5,
      date: "AUG - NOV 2023",
      title: "Study Web Foundation",
      company: "Code Wall Technology",
      description: "I have studied Web Foundation.",
      skills: [
        { HTML: { icon: <FaHtml5 />, className: "text-red-500" } },
        { CSS: { icon: <FaCss3 />, className: "text-orange-500" } },
        { JavaScript: { icon: <FaJs />, className: "text-yellow-500" } },
        { Bootstrap: { icon: <FaBootstrap />, className: "text-purple-500" } },
      ],
    },
    {
      id: 6,
      date: "JULY 2018 - OCT 2023",
      title: "Project Engineer (Civil)",
      company: "",
      description:
        "	I have 4 years experiences as a Site Engineer.In Singapor I have experiences in Matel Works Project for LTA's MRT project and residential building, Renovation works for HDB and Condo. Previously, I worked as Site Engineer cum Drafter for Heap Heng Matel PTE LTD and CA Studio PTE LTD the same time in Singapore. In Myanmar also worked as Site Engineer cum BBS for SSJH Myanmar Co.,Ltd (Chinese Company) RCC residential building, hotel, apartment and shopping mall projects. Experienced in different cultures, languages, international company procedures and techniques.",
      skills: ["Project Management", "Drafter", "QS", "QC", "BBS"],
    },
  ];
  return (
    <div id="experience" className="m-10 mt-20 font-serif text-white ">
      <h1 className="text-xl ">EXPERIENCES .....</h1>

      <div>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="pb-2 mt-4 text-justify border-b-2 border-white "
          >
            <div className="md:grid md:grid-cols-4 items-start justify-start gap-2 md:gap-10 mb-2">
              <div className="w-full">
                <p>{experience.date}</p>
              </div>
              <div className=" col-span-3">
                <div className=" flex gap-4">
                  {experience.title} |
                  <Link
                    to="https://creativecodermm.com/"
                    className="underline hover:bg-gray-500 "
                  >
                    {experience.company}
                  </Link>
                </div>

                <div>
                  <ReadMoreText text={experience.description} />

                  <div className="flex  gap-2 mt-2 items-center ">
                    <p className="mt-2">Skill: </p>
                    <div className="flex flex-wrap gap-2 mt-2 ">
                      {Array.isArray(experience.skills) &&
                        experience.skills.map((skill, index) => {
                          const skillName = Object.keys(skill)[0];
                          const skillIcon = skill[skillName]?.icon;
                          const skillClassName = skill[skillName]?.className;
                          if (typeof skill === "string") {
                            return (
                              <span
                                key={index}
                                className="p-1 mr-2 font-bold text-white bg-blue-500 rounded-md flex justify-center items-center"
                              >
                                {skill}
                              </span>
                            );
                          }
                          return (
                            <span
                              key={index}
                              className={`p-2 font-bold text-4xl ${skillClassName}`}
                            >
                              {skillIcon}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
