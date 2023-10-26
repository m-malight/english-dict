import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import Meaning from "./Components/Meaning";
import { fetch_words } from "./API/GetWords";
import Word from "./Components/Word";
import ToggleTheme from "./Components/ToggleTheme";
import FontSelector from "./Components/Fonts";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [themeColor, setThemeColor] = useState('light')
  const [selectedFont, setSelectedFont] = useState("serif")
  

  async function fetch_data(word) {
    try {
      setLoading(true);
      setSearchInitiated(true);
      const get_data = await fetch_words(word);
      setData({ ...get_data[0] });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  function updateTheme () {
  themeColor === "light" ? setThemeColor("dark") : setThemeColor("light")
  }

  function fontChange (font) {
 setSelectedFont(font)
  }

  useEffect (()=> {
themeColor === 'light' ? document.body.classList.add ("bg-white", "text-black") : document.body.classList.add ("bg-black", "text-white")
if (themeColor === 'light') {
  document.body.classList.remove("bg-black", "text-white")
  document.body.classList.add("bg-white", "text-black")
} else {
  document.body.classList.remove("bg-white", "text-black")
  document.body.classList.add("bg-black", "text-white")
}
console.log(themeColor)

  }, [themeColor])

  
  return (
    <div className={`ml-auto mr-auto mt-2 mb-2  w-5/6 lg:w-2/5 xl:w-5/5 font-${selectedFont}` }
    >
      <div className="flex justify-end">
        <FontSelector theme = {themeColor} fontToggle = {fontChange}/>
        <p className="border-l border-gray-400  ml-3 mr-3"></p>
        <ToggleTheme onToggle = {updateTheme} />
      </div>
      <Search callback={fetch_data} theme = {themeColor} />
      {loading ? (
        <p className="mt-18 font-bold text-2xl">Loading...</p>
      ) : (
        <>
          {searchInitiated && Object.keys(data).length === 0 ? (
            <p className="mt-18 font-bold text-2xl">No Words Found</p>
          ) : (
            <>
              <Word data={data} />
              <Meaning data={data} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
