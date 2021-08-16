import React from "react";
import { themeContext } from "../Contexts/themecontext";

class Booklist extends React.Component {
  static contextType = themeContext;

  render() {
    let { isLightTheme, light, dark } = this.context;
    let theme = isLightTheme ? light : dark;
    return (
      <div style={{ background: theme.ui }} className="book-container">
        <ul>
          <li style={{ color: theme.syntax, backgroundColor: theme.bg }}>
            The way of king
          </li>
          <li style={{ color: theme.syntax, backgroundColor: theme.bg }}>
            Rich dad poor dad
          </li>
          <li style={{ color: theme.syntax, backgroundColor: theme.bg }}>
            Eloquent javascript
          </li>
        </ul>
      </div>
    );
  }
}
export default Booklist;
