import React, { useState } from "react";
import { BsMoon, BsFillSunFill } from "react-icons/bs";

function ToggleTheme({ onToggle }) {
  const [darkMode, setDarkMode] = useState(false);

  function themeToggle() {
    setDarkMode(!darkMode);
    onToggle();

    // document.body.classList.toggle("dark-mode");
  }
  return (
    <div className="flex">
      <div
        className={`relative w-11 h-5 ${
          darkMode ? "bg-purple-700" : "bg-gray-700"
        } rounded-full flex`}>
        <label
          className={`h-4 w-4 relative top-0.5 ml-0.5 mr-0.5 bg-white rounded-full transform duration-300 ease-in-out ${
            darkMode ? "translate-x-6" : ""
          }`}
          htmlFor="toggle">
          <input
            type="checkbox"
            id="toggle"
            className="opacity-0"
            checked={darkMode}
            onChange={themeToggle}
          />
        </label>
      </div>
      <div className="ml-2 mt-0.5 mr-2">
        {darkMode ? <BsMoon /> : <BsFillSunFill />}
      </div>
    </div>
  );
}

export default ToggleTheme;
