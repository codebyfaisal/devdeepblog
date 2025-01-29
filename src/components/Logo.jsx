import React from "react";

const Logo = ({ styles }) => {
  return (
    <div className={`flex items-center font-exo2 ${styles}`}>
      <p className="text-7xl">D</p>
      <p className="grid text-4xl font-bold h-min leading-[1.5rem]">
        <span>ev</span>
        <span>eep</span>
      </p>
    </div>
  );
};

export default Logo;
