//svgs for gradient icons
import React from "react";

const GradientIcons = () => {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="light-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#969699" offset="0%" />
          <stop stopColor="#1e1e22" offset="100%" />
        </linearGradient>
      </svg>

      <svg width="0" height="0">
        <linearGradient id="dark-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#fff" offset="0%" />
          <stop stopColor="#fff" offset="100%" />
        </linearGradient>
      </svg>
    </>
  );
};

export default GradientIcons;
