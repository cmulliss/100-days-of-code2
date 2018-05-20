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
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
/* provider is a helper component, allows us to inject our store into the react components. Passing a store created with createStore, which is stored in the store component.
Passing this store's constant as a value to this prop.
To hook up the Provider component with the store, above:
const store = createStore()
Need to set up a special property expected by that component, named 'store'.
 <Provider store={store}>
 and pass 'store' created with createStore which in our case is stored in that store constant. {store} passed as value to this props.
 The store is connected to our react app, a bit, but need to get the data from the store, like the counter value in our counter container, where it's all managed internally.
 We need to connect the individual container with the store, in other words, we want to set up our subscription here.

 In the Counter container, still container components that manage state, they don't manage it on their own anymore, but are the places that receive it from redux.
 We still use container components, which then may distribute it down to their components which they embed, but we NEVER change our pattern of having a few selected components getting the state and passing it on.
 Import { connect }, it's a fn, which returns a higher order component, we use on the export. Is a fn which returns a fn, which then takes a component as input. We pass 2 pieces of info to connect, which is part of the whole app state, we only have the counter, but in bigger apps may have loads of diff states and pieces of state you manage. 

*/
