import React, { useContext } from "react";
import { themeContext } from "../Contexts/themecontext";

function Toggletheme() {
  const { toggleTheme } = useContext(themeContext);
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default Toggletheme;
