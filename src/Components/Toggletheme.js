import React from "react";
import { themeContext } from "../Contexts/themecontext";

export default class Toggletheme extends React.Component {
  static contextType = themeContext;
  render() {
    var { toggleTheme } = this.context;
    return (
      <div>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    );
  }
}
