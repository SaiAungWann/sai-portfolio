// ReadMoreText.jsx
import React, { useState, useRef, useEffect } from "react";

const ReadMoreText = ({ text, wordLimit = 40 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded(!isExpanded);

  const words = text.trim().split(/\s+/);
  const isLong = words.length > wordLimit;

  return (
    <div className="max-w-xl">
      <p
        className={`${
          isExpanded ? "" : "line-clamp-3"
        } transition-all duration-300`}
      >
        {text}
      </p>
      {!isLong ? (
        ""
      ) : (
        <span
          onClick={toggleText}
          className="text-gray-500 cursor-pointer font-medium hover:underline"
        >
          {isExpanded ? "See less" : "See more..."}
        </span>
      )}
    </div>
  );
};

export default ReadMoreText;
