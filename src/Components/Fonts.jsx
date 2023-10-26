import React, { useState } from "react";

function FontSelector({ theme, fontToggle }) {
  const [selectedFont, setSelectedFont] = useState("serif");

  const handleFontChange = (e) => {
    const font = e.target.value;
    setSelectedFont(font);
    fontToggle(font);
  };

  return (
    <div>
      <select
        value={selectedFont}
        onChange={handleFontChange}
        className={`${theme === "light" ? "bg-white" : "bg-black text-white"}`}>
        <option className="font-serif" value="serif">
          Serif
        </option>
        <option className="font-sans" value="sans">
          sans-serif
        </option>
        <option className="font-mono" value="mono">
          Mono
        </option>
      </select>
    </div>
  );
}

export default FontSelector;
