import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './store/reducer'

// takes reducer and input
const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
/* provider is a helper component, allows us to inject our store into the react components. Passing a store created with createStore, which is stored in the store component.
*/
