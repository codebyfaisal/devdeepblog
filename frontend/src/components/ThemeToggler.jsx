import { useState } from "react";
import { GearIcon } from "@radix-ui/react-icons";

const themeButtonStyle =
  "size-8 aspect-square rounded-full border border-white/50 cursor-pointer transition-all duration-300 hover:scale-105";

const ThemeToggler = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility
  const togglerMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Change the theme by setting the 'theme' attribute on the body element
  const changeTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
  };

  return (
    <div className="fixed top-[40%] left-2">
      {/* Gear Icon */}
      <GearIcon
        width={30}
        height={30}
        onClick={togglerMenu}
        className={`cursor-pointer transition-transform duration-300 ${
          menuOpen ? "rotate-90" : ""
        }`}
      />

      {/* Theme Picker Menu */}
      <div
        className={`relative top-2 left-4 transition-all duration-300 overflow-hidden rounded-lg shadow-lg bg-black dark-theme-blue:bg-white ${
          menuOpen
            ? "max-w-40 max-h-40 opacity-100 delay-150"
            : "max-w-0 max-h-0 opacity-0"
        }`}
      >
        <div
          className="bg-light-black/80 text-white rounded-lg p-4 space-y-2 dark-theme-blue:bg-white dark-theme-blue:text-black dark-theme-white:bg-white dark-theme-white:text-black
        "
        >
          <p className="text-lg font-bold">Themes</p>
          <ul className="grid grid-cols-3 gap-2 grid-rows-2">
            {/* Light Blue Theme Button */}
            <li>
              <button
                type="button"
                className={`${themeButtonStyle} bg-light-blue`}
                onClick={() => changeTheme("")}
              ></button>
            </li>
            {/* Light Orange Theme Button */}
            <li>
              <button
                type="button"
                className={`${themeButtonStyle} bg-light-orange`}
                onClick={() => changeTheme("light-theme-orange")}
              ></button>
            </li>
            {/* Dark Blue and Black Theme Button */}
            <li>
              <button
                type="button"
                className={`${themeButtonStyle}`}
                onClick={() => changeTheme("dark-theme-blue")}
                style={{
                  background:
                    "linear-gradient(-60deg, var(--color-light-blue) 50%, var(--color-light-black) 50%)",
                }}
              ></button>
            </li>
            {/* Light-Dark Theme Button */}
            <li>
              <button
                type="button"
                className={`${themeButtonStyle}`}
                onClick={() => changeTheme("dark-theme-white")}
                style={{
                  background:
                    "linear-gradient(-60deg, var(--color-light-black) 50%, white 50%)",
                }}
              ></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
