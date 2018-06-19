import { combineReducers } from 'redux'
import movies from './movies-reducer'

const rootReducer = combineReducers({
  movies
})

export default rootReducer

// import our individual reducers here to be combined
