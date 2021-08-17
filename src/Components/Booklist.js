import React,{useContext} from "react";
import { themeContext } from "../Contexts/themecontext";

function Booklist() {
  const {isLightTheme,light,dark} = useContext(themeContext);
  let theme=isLightTheme?light:dark;
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
  )
}


export default Booklist;
