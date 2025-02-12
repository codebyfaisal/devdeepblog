import { useState } from "react";
import { toast } from "react-toastify";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isResponse, setIsResponse] = useState(true);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsResponse(false);
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/email/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
          }),
        }
      );
      const result = await response.json();
      if (result.message) toast(result.message);
      else if (result.error) toast.error("❌ Subscription failed. Try again.");
    } catch (error) {
      console.log(error);
      toast.error("❌ An error occurred. Please try again later.");
    } finally {
      e.target.email.value = "";
      setIsResponse(true);
    }
  };

  return (
    <footer className="border-t border-gray-200 pt-8 space-y-8 text-gray-700">
      {/* Email Subscription */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Stay updated with our latest content
        </h2>
        <form
          onSubmit={handleSubmit}
          className={`flex items-center ring ring-gray-300 group transition duration-150 min-w-60 w-96 max-w-96 rounded-sm overflow-hidden relative ${
            isFocus ? "ring-gray-700" : ""
          }`}
        >
          {!isResponse ? (
            <div className="w-full h-full absolute top-0 left-0 bg-white opacity-90 grid place-items-center">Please wait . . . </div>
          ) : (
            ""
          )}
          <input
            type="email"
            name="email"
            id="email"
            required={true}
            placeholder="Enter Your Email"
            className="w-full rounded-md outline-none border-none pl-4"
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
            {isResponse ? (
              <PaperPlaneIcon
                className={`-rotate-20 transition duration-150 ${
                  isFocus ? "text-white" : "group-hover:text-white"
                }`}
                width={20}
                height={20}
              />
            ) : (
              <img src="../public/loading.svg" alt="loading" className="w-6" />
            )}
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
