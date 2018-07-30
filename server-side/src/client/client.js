// Startup point for the client side application
// add code for boot up process
import React from 'react'
import { hydrate } from 'react-dom'
import Home from './components/Home'

// attempt to render Home component into DOM
// originally rendered our app once on the server
hydrate(<Home />, document.querySelector('#root'))
