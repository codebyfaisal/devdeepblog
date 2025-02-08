import React from "react";

const Loader = ({ className }) => {
  return (
    <div
      className={`loader-container flex justify-center items-center ${
        className && className
      }`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
