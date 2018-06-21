// src/index.js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from '../src/containers/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
