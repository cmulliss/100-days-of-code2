import { createStore, applyMidddleware } from 'redux'
import thunk from 'redux-thunk'

// just creating store in here, that's it
export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk))
  return store
}

// work with store long before we call our render fn
