import React from "react";
import { TypeAnimation } from "react-type-animation";

function Animation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "React - Laravel.",
        2000,
        "PHP - Laravel.",
        2000,
        // wait 1s before replacing "Mice" with "Hamsters"
        " MERN-Stack.",
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}

export default Animation;
