import React, { useContext } from "react";
import { booklist } from "../Contexts/Booklistcontext";
import { themeContext } from "../Contexts/themecontext";

function Booklist() {
  const { isLightTheme, light, dark } = useContext(themeContext);
  let theme = isLightTheme ? light : dark;
  const { bookList } = useContext(booklist);
  return (
    <div style={{ background: theme.ui }} className="book-container">
      <ul>
        {bookList.map((book) => {
          return (
            <li
              key={book.id}
              style={{ color: theme.syntax, backgroundColor: theme.bg }}
            >
              {book.bookName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Booklist;
