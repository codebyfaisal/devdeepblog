import { useEffect, useState } from "react";
import { Logo } from ".";
import { bmcLogo, bmcIcon } from "../assets";
import { GitHubLogoIcon, PauseIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const linkLi = (link = "") => (
  <li className="group">
    <Link to={`/${link}`}>
      <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:transition-all before:duration-200 group-hover:before:bg-black">
        <span className="relative transition-all duration-200 capitalize group-hover:text-white">
          {link === "" ? "home" : link}
        </span>
      </span>
    </Link>
  </li>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 mb-14 bg-white">
      <div className="font-exo2 flex justify-between items-center py-2">
        <Link to={"/"}>
          <Logo />
        </Link>

        {/* desktop navbar */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-lg items-center">
            {linkLi()}
            {linkLi("about")}
            {linkLi("contact")}
          </ul>
        </nav>

        {/* mobile sidebar */}
        <nav
          className={`md:hidden absolute top-[10%] transition-all duration-300 ease-in-out rounded-lg ring ring-gray-200 ${
            !menuOpen ? "-right-[100%]" : "-right-[0%]"
          }`}
        >
          <ul className="flex flex-col justify-evenly py-8 gap-8 text-lg items-end pr-6 min-w-36">
            {linkLi()}
            {linkLi("about")}
            {linkLi("contact")}
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/codebyfaisal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon width={25} height={25} />
          </a>
          <a
            href="https://buymeacoffee.com/codebyfaisal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={bmcLogo}
              alt="Buy me coffee"
              className="max-h-8 hidden md:block"
            />
            <img
              src={bmcIcon}
              alt="Buy me coffee"
              className="max-h-8 md:hidden"
            />
          </a>

          <button
            type="button"
            className="md:hidden cursor-pointer rotate-90 flex flex-col items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <Cross1Icon width={25} height={25} className="scale-80 " />
            ) : (
              <PauseIcon width={25} height={25} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
