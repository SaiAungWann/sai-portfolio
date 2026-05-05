import React from "react";
import { TypeAnimation } from "react-type-animation";

function eduAnimation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Bachelor of Engineering (CIVIL)",
        2000,
        "Bachelor of Technology (CIVIL)",
        2000,
      ]}
      wrapper="span"
      speed={50}
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

export default eduAnimation;
