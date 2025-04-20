import React from "react";
import { Link as LINK } from "react-router-dom";
import Gitbub from "../assets/svgs/github.svg";
import Line from "../assets/svgs/line.svg";
import Linkedin from "../assets/svgs/linkedin.svg";
import Whatsapp from "../assets/svgs/whatsapp.svg";
function Contact() {
  return (
    <>
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
            <img src={Gitbub} alt="" className="w-8 rounded-full hover:w-10" />
          </LINK>
          <LINK
            to={
              "https://www.linkedin.com/in/sai-aung-wann-%E4%BD%99%E8%8F%AB%E5%A4%A9"
            }
          >
            <img src={Linkedin} alt="" className="w-8 rounded-md hover:w-10" />
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
    </>
  );
}

export default Contact;
