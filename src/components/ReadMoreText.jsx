// ReadMoreText.jsx
import React, { useState } from "react";

const ReadMoreText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded(!isExpanded);

  return (
    <div className="max-w-xl">
      <p className={isExpanded ? "" : "line-clamp-3"}>{text}</p>
      <span
        onClick={toggleText}
        className="text-gray-500 cursor-pointer font-medium hover:underline"
      >
        {isExpanded ? "See less" : "See more..."}
      </span>
    </div>
  );
};

export default ReadMoreText;
