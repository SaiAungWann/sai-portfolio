import React, { useState } from "react";
import NavisworkCert from "../assets/photos/cert/Naviswork_4D,5D,Coordination.png";
import RevitAdvancedCert from "../assets/photos/cert/Revit_A&S_Advanced.png";
import RevitEssentialCert from "../assets/photos/cert/Revit_A&S_Essential.png";
import WinnerCertificate from "../assets/photos/cert/Sai_Aung_Wann_Winner_Certificate.jpg";
import VrayCert from "../assets/photos/cert/Vray.jpg";
import EtabsSafe from "../assets/photos/cert/Sai Aung Wann(Etabs&Safe_Basic).jpg";

function MyCerts() {
  // State for the modal
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Structured Data
  const certsData = [
    { src: NavisworkCert, title: "NAVISWORKS MANAGE_4D, 5D, COORDINATION", from: "ZEON LIGHT AUTODESK AUTHORIZED TRAINING CENTER" },
    { src: RevitAdvancedCert, title: "REVIT ARCHITECTURE & STRUCTURE ADVANCED", from: "ZEON LIGHT AUTODESK AUTHORIZED TRAINING CENTER" },
    { src: RevitEssentialCert, title: "REVIT ARCHITECTURE & STRUCTURE ESSENTIAL", from: "ZEON LIGHT AUTODESK AUTHORIZED TRAINING CENTER" },
    { src: EtabsSafe, title: "STRUCTURAL ANALYSIS AND DESIGN BY USING ETABS & SAFE", from: "MILLIMETER - TRAINING DESIGN GROUP" },
    { src: WinnerCertificate, title: "Competition Winner", from: "ZEON LIGHT TRAINING PROGRAMS AWARDS" },
    { src: VrayCert, title: "SketchUp Vray & Photoshop Class", from: "CHAW KHAING ENGINEERING TRAINING CENTER" },
  ];

  // Navigation Logic
  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % certsData.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + certsData.length) % certsData.length);
  };

  return (
    <div id="certs" className="mx-10 my-5 font-serif text-white scroll-mt-24">
      <h1 className="text-2xl text-white ">MY CERTIFICATES .....</h1>
      
      {/* Thumbnail Grid */}
      <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 border-b border-gray-700 pb-2">
        {certsData.map((cert, index) => (
          <div 
            key={index} 
            className="cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(index)}
          >
            <img
              src={cert.src}
              alt={cert.title}
              className="w-full h-auto rounded shadow-md border border-gray-800"
            />
            <p className=" text-sm text-justify">{cert.title}</p>
          </div>
        ))}
      </div>

      {/* --- POPUP MODAL --- */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue bg-opacity-95 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            className="absolute top-5 right-10 text-5xl text-white hover:text-gray-400 z-50"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors text-3xl"
            onClick={showPrev}
          >
            &#10094;
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors text-3xl"
            onClick={showNext}
          >
            &#10095;
          </button>

          {/* Full Screen Image Container */}
          <div 
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <img
              src={certsData[selectedIndex].src}
              className="max-h-[75vh] object-contain shadow-2xl rounded-sm"
              alt="Fullscreen view"
            />
            
            {/* Info Section */}
            <div className="mt-6 text-center">
              <h2 className="text-3xl font-bold text-blue-400">{certsData[selectedIndex].title}</h2>
              <p className="text-xl text-gray-300 mt-1 italic">Issued by: {certsData[selectedIndex].from}</p>
              
              {/* Pagination counter */}
              <p className="mt-4 text-gray-500 text-sm">
                {selectedIndex + 1} / {certsData.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCerts;