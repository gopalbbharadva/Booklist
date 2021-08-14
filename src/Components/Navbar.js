import React from "react";
import { themeContext } from "../Contexts/themecontext";

class Navbar extends React.Component {
  static contextType = themeContext;
  render() {
    let { isLightTheme, light, dark } = this.context;
    let theme = isLightTheme ? light : dark;
    return (
      <div>
        <nav style={{ background: theme.ui ,color:theme.syntax}}>
          <h1>Context Api</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
