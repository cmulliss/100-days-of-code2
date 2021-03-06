
# Styled Component create-react-app

1. create-react-app to create new app
2. </section>
3. go to App.js
4. import styled from 'styled-components'
5. then, Appwrapper, to avoid naming conflicts, will replace className="App"

```javascript
const Appwrapper = styled.div`

`
```

* copy and paste App style from css file
* continue like this
* completed code without attrs is below
* however, could set the img source using attrs

## Img src using attrs helper

* src = logo
* get rid of the src prop on the app logo
* src={logo}
* use for generic components

```javascript
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

const Applogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`

class App extends Component {
  render () {
    return (
      <Appwrapper>
        <Appheader>
          <Applogo src={logo} alt='logo' />
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
```