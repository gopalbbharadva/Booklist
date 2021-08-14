import React, { Component } from "react";
import Booklist from "./Components/Booklist";
import Navbar from "./Components/Navbar";
import Themecontextprovider from "../src/Contexts/themecontext";

function App() {
  return (
    <div className="App">
      <Themecontextprovider>
        <Navbar />
        <Booklist />
      </Themecontextprovider>
    </div>
  );
}

export default App;
