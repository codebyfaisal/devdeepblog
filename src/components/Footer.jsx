import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-2 font-semibold opacity-80">
      <p>&copy; {new Date().getFullYear()} Dev Deep. All rights reserved.</p>
      <p>
        Powered by
        <a
          href="https://www.github.com/codebyfaisal"
          className="text-blue-600 underline"
        >
          {" "}
          codebyfaisal
        </a>
      </p>
    </footer>
  );
};

export default Footer;
