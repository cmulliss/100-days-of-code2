import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/app'
import reducers from './reducers/'

const createdStore = applyMiddleware(thunk)(createStore)
const store = createdStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
// import redux thunk at top of file,
// then instancing it and making use of the store.
