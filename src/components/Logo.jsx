import React from "react";
import PropTypes from "prop-types";

const Logo = ({ styles }) => {
  return (
    <div className={`flex items-center ${styles}`}>
      <p className="text-6xl">D</p>
      <p className="flex flex-col text-3xl font-bold h-min leading-[1.3rem]">
        <span>ev</span>
        <span>eep</span>
      </p>
    </div>
  );
};
Logo.propTypes = {
  styles: PropTypes.string,
};

export default Logo;
