import React from 'react'
import styled from 'styled-components'

const PasswordInput = styled.input.attrs({
  type: props => (props.showPassword ? 'text' : 'password')
})`
  border-radius: 3px;
  outline: none;
  border: 1px solid;
  border-color: black
&:focus {
    border-color: blue;
  }
`
export default PasswordInput

// adding props or attriburtes to style components
// want to create a common password input component
// will consist of rendering an html input element with a type attribute set to password
// using attrs, a chainable method, before applying css
// attrs takes object with any attributes we want to set for this input element
// any attribues will be merged in with any props you might add to the styled component while rendering it.
// can dynamically change these attrs
// toggling between a text input and a password input
//
// In App.js, want to pass a prop of showPassword and set that = to this.state.showPassword, and in the passwordInput we can interpolate a fn and have access to props as an argument within that fn. This is the same for the attrs helper, but dont need to interpolate a fn, can set type = to a fn that returns a value within that fn.
