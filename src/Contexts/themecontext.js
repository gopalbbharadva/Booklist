import React, { createContext } from "react";

export const themeContext = React.createContext();

class themeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme,
    });
  };

  render() {
    return (
      <themeContext.Provider
        value={{ ...this.state, toggleTheme:this.toggleTheme }}
      >
        {this.props.children}
      </themeContext.Provider>
    );
  }
}

export default themeContextProvider;
