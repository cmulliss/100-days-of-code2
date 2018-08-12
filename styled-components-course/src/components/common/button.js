import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.backgroundColor};
  border: 1px solid ${props => props.theme.primaryColor};
  font-size: 20px;
  color: ${props => props.theme.primaryColor};
  outline: none;
  ${props =>
    props.primary &&
    css`
      background: blue;
      color: white;
    `};
`

export default Button
// interpolate a fn,
// and have access to props within backticks

// if props primary exists, if primary has been
// passed in as prop to the button component,
// render some more css

// the backticks are 'tagged template literals'
// a new es6 feature, actually a function call
// so, button is a fn, calling it with backticks
// allows us to identify any interpolated fns, or
// any interpolated properties, could be a string,
// within the fn call

// styled components generate a style sheet for us, create classes and attach them as classnames to DOM nodes and then injects the stylesheet at the end of the head tag at runtime, in public/index.html
