import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'

const App = () => <div>Hello</div>

const createStoreWithMiddleware = applyMiddleware()(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// is creating a store with the middleware, the provider needs
// the connection. createStore is going to be working with middleware

// store to connect react-redux with redux, 'store' is the connection
// between them.

// 3 things need to do on beginning any project:
// 1. call / import the dependencies
// 2. create the variable that binds the middleware with createStore
// 3. then pass the store to the provider

// createStoreWithMiddleware will receive a list of all the reducers
// import reducers
// pass reducers to store
