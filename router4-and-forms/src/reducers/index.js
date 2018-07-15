import { combineReducers } from 'redux'
import PostsReducer from './posts-reducer'

// import PostsReducer above, then assign to the
// posts piece of state inside the combineReducers call
const rootReducer = combineReducers({
  posts: PostsReducer
})

export default rootReducer
