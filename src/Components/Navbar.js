import React from "react";
import { authContext } from "../Contexts/Authcontext";
import { themeContext } from "../Contexts/themecontext";

class Navbar extends React.Component {
  render() {
    return (
      <authContext.Consumer>
        {(authcontext) => (
          <themeContext.Consumer>
            {(themeContext) => {
              let { isAuthenticated, toggleAuth } = authcontext;
              let { isLightTheme, light, dark } = themeContext;
              let theme = isLightTheme ? light : dark;
              return (
                <div>
                  <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context Api</h1>
                    <div onClick={toggleAuth}>
                      {isAuthenticated
                        ? "User has logged in"
                        : "User logged out"}
                    </div>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                </div>
              );
            }}
          </themeContext.Consumer>
        )}
      </authContext.Consumer>
    );
  }
}
export default Navbar;
