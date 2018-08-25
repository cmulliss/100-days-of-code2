import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../client/reducers'

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk))

  return store
}

// work with store long before we call our render fn
