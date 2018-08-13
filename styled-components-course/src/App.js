import React, { Component } from "react";
//import Button from "./components/common/button";
import { ThemeProvider } from "styled-components";
import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";
//import PasswordInput from "./components/common/PasswordInput";
//import { Button } from "reactstrap";
//import PrimaryButton from "./components/common/PrimaryButton";
import { extend } from "styled-components";
import Spinner from "./components/common/Spinner";

// const LoginWithFacebookButton = Button.extend`
//   background: blue;
//   border-color: blue;
//   color: white;
// `;

class App extends Component {
  state = {
    theme: LightTheme,
    showPassword: false
  };

  //   handleToggleTheme = () => {
  //     this.setState({
  //       theme: this.state.theme.id === "light" ? DarkTheme : LightTheme
  //     });
  //   };
  // In App.js, want to pass a prop of showPassword and set that = to this.state.showPassword, and in the passwordInput we can interpolate a fn and have access to props as an argument within that fn. This is the same for the attrs helper, but dont need to interpolate a fn, can set type = to a fn that returns a value within that fn.
  //   handleTogglePassword = () => {
  //     this.setState({
  //       showPassword: !this.state.showPassword
  //     });
  //   };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <section>
          <Spinner />
        </section>
      </ThemeProvider>
    );
  }
}

export default App;

// render() {
//     return (
//         <div>
//           <ThemeProvider theme={this.state.theme}>
//             <Button onClick={this.handleToggleTheme}>Toggle Theme</Button>

// remove from section
//<PasswordInput showPassword={this.state.showPassword} />
// <Button onClick={this.handleTogglePassword}>
// {this.state.showPassword ? "Hide" : "Show"}
// </Button>

// <Button color={"primary"}>Primary Button</Button>
//             <PrimaryButton>New primary button</PrimaryButton>
//             <LoginWithFacebookButton>
//               Login With Facebook
//             </LoginWithFacebookButton>
