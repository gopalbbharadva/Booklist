import React, { Component, createContext, useState } from "react";

export const booklist = createContext();

function Booklistcontext(props) {
  let [bookList, setBookList] = useState([
    { bookName: "The Psychology Of Investing", id: 1 },
    { bookName: "Live Rich for a Lifetime", id: 2 },
    { bookName: "Your Money or Your Life", id: 3 },
  ]);
  return (
    <booklist.Provider value={{bookList}}>{props.children}</booklist.Provider>
  );
}

export default Booklistcontext;
