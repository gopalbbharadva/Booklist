import React, { useContext } from "react";
import { authContext } from "../Contexts/Authcontext";
import { themeContext } from "../Contexts/themecontext";

function Navbar() {
  const { isLightTheme, light, dark } = useContext(themeContext);
  const { isAuthenticated, toggleAuth } = useContext(authContext);
  let theme = isLightTheme ? light : dark;
  return (
    <div>
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context Api</h1>
        <div onClick={toggleAuth}>
          {isAuthenticated ? "User has logged in" : "User logged out"}
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
