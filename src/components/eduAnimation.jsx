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
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    /> 
  );
}

export default eduAnimation;
