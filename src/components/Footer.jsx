import React, { useState } from "react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <footer className="border-t border-gray-200 pt-8 space-y-8 text-gray-700">
      {/* Email Subscription */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Stay updated with our latest content
        </h2>

        <form
          action="POST"
          className={`flex items-center ring ring-gray-200 group transition duration-150 ${
            isFocus ? "ring-gray-400" : ""
          }`}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="w-96 rounded-md outline-none border-none pl-4"
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
          />
          <button
            type="submit"
            className={`py-2 px-4 cursor-pointer text-white bg-black/80 transition duration-150 group-hover:bg-black ${
              isFocus ? "bg-black" : ""
            }`}
          >
            <PaperPlaneIcon
              className={`-rotate-20 transition duration-150 ${
                isFocus ? "text-white" : "group-hover:text-white"
              }`}
              width={20}
              height={20}
            />
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg font-medium">Follow us for updates</p>
        <div className="flex gap-4">
          <a
            href="http://www.linkedin.com/in/codebyfaisal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition duration-200"
          >
            <LinkedInLogoIcon className="w-6 h-6 hover:scale-110" />
          </a>
          <a
            href="http://www.github.com/codebyfaisal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition duration-200"
          >
            <GitHubLogoIcon className="w-6 h-6 hover:scale-110" />
          </a>
          <a
            href="http://www.instagram.com/codebyfaisal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition duration-200"
          >
            <InstagramLogoIcon className="w-6 h-6 hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-between items-center text-sm opacity-80 border-t border-gray-200 py-2">
        <p>&copy; {new Date().getFullYear()} Dev Deep. All rights reserved.</p>
        <p>
          Powered by{" "}
          <a
            href="https://www.github.com/codebyfaisal"
            className="text-blue-600 underline"
          >
            codebyfaisal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
