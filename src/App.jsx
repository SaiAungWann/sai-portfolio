import React from "react";
import { Outlet } from "react-router";
import Detail from "./components/Detail";
import BgImg from "./assets/photos/BgImg.jpg";
import "./App.css";

export default function Layout() {
  const BGIMG = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100vh",
  };
  return (
    <div className="grid min-h-screen min-w-screen md:grid md:grid-cols-3" style={BGIMG}>
      <div className="col-span-1 mt-10 ml-10 overflow-auto hidden md:block">
        <Detail />
      </div>

      <div className="col-span-2">
        <div>
          <Outlet />
        </div>
      </div>
      <div className=" w-full h-10 text-center bg-gray-900 text-white col-span-3">
        <h1 className="p-2 text-center align-middle">
          © 2026{" "}
          <a
            href="https://www.facebook.com/sai.aung.wann.2024"
            className="underline"
          >
            Sai Aung Wann
          </a>
          . All rights reserved.
        </h1>
      </div>
    </div>
  );
}
