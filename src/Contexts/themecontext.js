import React, { createContext } from "react";

export const themeContext = React.createContext();

class themeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  render() {
    var changeTheme = () => {
      this.setState({
        isLightTheme: !this.state.isLightTheme,
      });
    };
    return (
      <themeContext.Provider value={{ ...this.state }}>
        <button onClick={changeTheme}>Toggle theme</button>
        {this.props.children}
      </themeContext.Provider>
    );
  }
}

export default themeContextProvider;
