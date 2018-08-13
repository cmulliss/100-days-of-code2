import React, { Component } from 'react'
import logo from './logo.svg'
import styled, { keyframes } from 'styled-components'

const Appwrapper = styled.div`
  text-align: center;
`
const Appheader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const Apptitle = styled.h1`
  font-size: 1.5em;
`
const Appintro = styled.p`
  font-size: large;
`
const rotate360 = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Applogo = styled.img.attrs({
  src: logo
})`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`

class App extends Component {
  render () {
    return (
      <Appwrapper>
        <Appheader>
          <Applogo alt='logo' />
          <Apptitle>Welcome to React</Apptitle>
          <Appintro>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Appintro>
        </Appheader>
      </Appwrapper>
    )
  }
}

export default App
