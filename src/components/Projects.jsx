import React from "react";
import { Link } from "react-router-dom";
import Library from "../assets/photos/e-library.png";
import Cat_Cream from "../assets/photos/cat_cream.png";
import Recipe from "../assets/photos/recipes.png";
import eCommerce from "../assets/photos/e-commerce.png";
import MyPhoto1 from "../assets/photos/my_photo_1.jpg";
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

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cat Cream - Ice Cream Premium",
      company: "Cat Cream Cat Cafe",
      link: "https://github.com/SaiAungWann/Cat_Cream.git",
      image: Cat_Cream,
      description:
        "This project is an e-commerce website for a local ice cream shop and cat-cafe, allowing customers to view the menu, place orders online, book table online, get reward points, discount feature, have their favorite ice cream delivered to their doorsteps, chat with restaurant and comment the feedback for their favorite ice scream. The platform provides an intuitive and user-friendly experience to browse flavors, view prices, and customize orders. Admin can make the ice cream menu all (CRUD) process,  confirm booking for tables, chat with users, manage the restaurant business in the admin dashboard.",
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
      title: "E-commerce Website (Electronic)",
      company: "Sai Aung Wann",
      link: "",
      image: eCommerce,
      description:
        "This project is a fully-featured e-commerce website designed for an electronics shop, offering a seamless and user-friendly shopping experience. Customers can conveniently browse product categories, view detailed information and pricing, place orders online, and have their favorite items delivered straight to their doorsteps. The platform also enables real-time chat with the shop admin and allows customers to leave feedback on their purchased products.On the administrative side, the system empowers the shop owner with full control through a dedicated dashboard—managing product listings (CRUD operations), processing orders, handling customer interactions, and efficiently overseeing overall business operations.",
      // skills: ["php", "laravel", "livewire", "tailwind", "mysql"],
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
      title: "Recipe Website",
      company: "Sai Aung Wann",
      link: "",
      image: Recipe,
      description:
        "This project is developed using the MERN stack, leveraging Vite and React to build a fast and responsive single-page application (SPA) with a modern UI/UX. The frontend incorporates various JavaScript functions, methods, and data-fetching techniques to enhance interactivity and user experience.On the backend, Node.js, Express, and MongoDB are used to provide a robust and scalable NoSQL database solution. The system includes essential backend functionalities such as user authentication, data validation, and access control.As a full-stack web application, users are required to register and log in to access features. Once authenticated, users can create, edit, and comment on their own recipes through a dynamic library interface.",
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
      title: "Private Library Project",
      company: "Sai Aung Wann",
      link: "",
      image: Library,
      description:
        "This project is created using Vite+React, Tailwind CSS and FireBase.Using Vite & React to build website UI and Ux for SPA (Singal Page Application) and add so maney JavaScript function, method, data fetching ect. Using FireBase for some backend service such as firestore, storage, authenticator and rules for users and datas.Which is the private library, users need to register and login in order to use the library.By using Library, users can create, edit, and write comments for their own books.",
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
      title: "Other Mini Projects",
      company: "Sai Aung Wann",
      link: "",
      image: "",
      description:
        "This project is created using Vite+React, Tailwind CSS and FireBase.Using Vite & React to build website UI and Ux for SPA (Singal Page Application) and add so maney JavaScript function, method, data fetching ect. Using FireBase for some backend service such as firestore, storage, authenticator and rules for users and datas.Which is the private library, users need to register and login in order to use the library.By using Library, users can create, edit, and write comments for their own books.",
      skills: [
        { HTML: { icon: <FaHtml5 />, className: "text-red-500" } },
        { CSS: { icon: <FaCss3 />, className: "text-orange-500" } },
        { JavaScript: { icon: <FaJs />, className: "text-yellow-500" } },
        { Bootstrap: { icon: <FaBootstrap />, className: "text-purple-500" } },
      ],
    },
    {
      id: 6,
      title: "Project Engineer (Civil)",
      company: "Sai Aung Wann",
      link: "",
      image: MyPhoto1,
      description:
        "	I have 4 years experiences as a Site Engineer.In Singapor I have experiences in Matel Works Project for LTA's MRT project and residential building, Renovation works for HDB and Condo. Previously, I worked as Site Engineer cum Drafter for Heap Heng Matel PTE LTD and CA Studio PTE LTD the same time in Singapore. In Myanmar also worked as Site Engineer cum BBS for SSJH Myanmar Co.,Ltd (Chinese Company) RCC residential building, hotel, apartment and shopping mall projects. Experienced in different cultures, languages, international company procedures and techniques.",
      skills: ["Project Management", "Drafter", "QS", "QC", "BBS"],
    },
  ];
  return (
    <div id="project" className="m-10 mt-20 space-y-2 font-serif text-white">
      <h1 className="text-xl ">PROJECTS .....</h1>

      {projects.map((project) => (
        <div
          key={project.id}
          className="mb-6 lg:grid  lg:grid-cols-4 gap-4 p-4 border-b-2 border-white"
        >
          <div className=" flex flex-col mx-auto items-center justify-center ">
            <Link
              to={project.link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-30}
            >
              <img
                src={project.image}
                className=" w-50 sm:70 md:100 lg:120 mx-auto"
              />
            </Link>
            <h3 className=" text-lg text-white text-center hidden lg:block">
              {project.title}
            </h3>
          </div>
          <div className="col-span-3 p-2 space-y-2 lg:border-l-2  border-white">
            <Link
              to={project.link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-30}
              activeClass="bg-green-500 rounded-md p-2 "
            >
              <h3 className="text-xl font-bold hover:text-blue-500 hover:underline">
                {project.title}
              </h3>
            </Link>
            <p className="text-sm">{project.date}</p>

            <p className=" text-justify">
              <ReadMoreText
                text={project.description}
                className="text-justify"
              />
            </p>

            <div className="flex gap-2 mt-2 items-center">
              <p>Skills:</p>
              <div className="flex flex-wrap gap-2 mt-2 ">
                {Array.isArray(project.skills) &&
                  project.skills.map((skill, index) => {
                    const skillName = Object.keys(skill)[0];
                    const skillIcon = skill[skillName]?.icon;
                    const skillClassName = skill[skillName]?.className;
                    if (typeof skill === "string") {
                      return (
                        <span
                          key={index}
                          className="p-1 mr-2 font-bold text-white bg-blue-500 rounded-md"
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
      ))}
    </div>
  );
}
