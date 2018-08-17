// Startup point for the client side application
// add code for boot up process
import React from 'react'
import { hydrate } from 'react-dom'
// import Home from './components/Home' replaced by Routes
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'

// attempt to render Home component into DOM
// originally rendered our app once on the server
// replace Home component with a bit of jsx
hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector('#root')
)
// hydrate(<Home />, document.querySelector('#root'))
