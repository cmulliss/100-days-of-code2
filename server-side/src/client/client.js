// Startup point for the client side application
// add code for boot up process
import React from 'react'
import { hydrate } from 'react-dom'
// import Home from './components/Home' replaced by Routes
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
// createStore to create redux store
import { createStore, applyMiddleware } from 'redux'
// middleware to handle asychronous action creators
import thunk from 'redux-thunk'
// provider to communicate data from store to any connected components in our app
import { Provider } from 'react-redux'

// attempt to render Home component into DOM
// originally rendered our app once on the server
// replace Home component with a bit of jsx

// create new store to use on client side
// reducers, initial state which is an empty object, then hook up the applyMiddleware call and pass in the redux thunk library
// then take this store and put into a provider, which will wrap our entire react app. Pass in store as prop to provider
// provider now has a reference to the redux store, any time the store changes, that provider will alert any connected components that they need to re-render.
const store = createStore(reducers, {}, applyMiddleware(thunk))

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
// hydrate(<Home />, document.querySelector('#root'))
