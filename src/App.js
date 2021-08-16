import React, { Component } from "react";
import Booklist from "./Components/Booklist";
import Navbar from "./Components/Navbar";
import Themecontextprovider from "../src/Contexts/themecontext";
import Toggletheme from "./Components/Toggletheme";
import AuthcontextProvider from "./Contexts/Authcontext";

function App() {
  return (
    <div className="App">
      <Themecontextprovider>
        <AuthcontextProvider>
          <Navbar />
          <Booklist />
          <Toggletheme />
        </AuthcontextProvider>
      </Themecontextprovider>
    </div>
  );
}

export default App;
