import React, { Component } from "react";
import Button from "./components/common/button";
import { ThemeProvider } from "styled-components";
import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";

class App extends Component {
  state = {
    theme: LightTheme
  };

  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === "light" ? DarkTheme : LightTheme
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Button onClick={this.handleToggleTheme}>Toggle Theme</Button>
      </ThemeProvider>
    );
  }
}

export default App;
