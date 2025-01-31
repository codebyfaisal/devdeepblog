import React from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 pt-8 space-y-8">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h2 className="text-2xl">Enter your email to get notifications </h2>
        <div className="flex justify-center">
          <form action="POST" className="flex items-center ring ring-gray-200">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-96 rounded-md outline-none border-none pl-4"
            />
            <button type="submit" className="p-2 cursor-pointer transition duration-150 group hover:bg-black">
              <PaperPlaneIcon
                className="-rotate-20 group-hover:text-white transition duration-150"
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center py-2 font-semibold opacity-80 border-t border-t-gray-200">
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
      </div>
    </footer>
  );
};

export default Footer;
