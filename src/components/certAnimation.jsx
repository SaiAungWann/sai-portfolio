import React from "react";
import { TypeAnimation } from "react-type-animation";

function certAnimation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "NAVISWORKS MANAGE_4D, 5D, COORDINATION",
        2000,
        "REVIT ARCHITECTURE & STRUCTURE ADVANCED",
        2000,
        "REVIT ARCHITECTURE & STRUCTURE ESSENTIAL",
        2000,
        "STRUCTURAL ANALYSIS AND DESIGN - ETABS & SAFE",
        2000,
      ]}
      // wrapper="span"
      // speed={50}
        style={{ 
          fontSize: "16px", 
          display: "inline-block",
          color: "#00FF85",           // Text Color (Neon Green example)
          backgroundColor: "#0f172a", // Highlight Color (Deep Navy)
          padding: "4px 8px",         // Adds space around the text
          borderRadius: "4px"         // Rounds the background corners
        }}
        repeat={Infinity}
    /> 
  );
}

export default certAnimation;
