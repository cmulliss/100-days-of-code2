// reducers/index.js
// import our individual reducers here to be combined and then passed to createStoreWithMiddleware
import { combineReducers } from 'redux'
import movies from './movies-reducer'

const rootReducer = combineReducers({
  movies
})
export default rootReducer
