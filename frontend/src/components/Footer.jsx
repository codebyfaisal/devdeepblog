import React from "react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Subscribe } from "./";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 pt-8 space-y-8 text-gray-700">
      {/* Email Subscription */}
      <Subscribe />

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
            href="https://codebyfaisal.netlify.app"
            target="_blank"
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
