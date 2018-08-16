// Startup point for the client side application
// add code for boot up process
import React from 'react'
import { hydrate } from 'react-dom'
import Home from './components/Home'
// import { BrowserRouter } from 'react-router-dom'
// import Routes from './Routes'

// attempt to render Home component into DOM
// originally rendered our app once on the server
// replace Home component with a bit of jsx
hydrate(<Home />, document.querySelector('#root'))
