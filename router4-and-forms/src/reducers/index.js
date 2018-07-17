import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import PostsReducer from './posts-reducer'

// import PostsReducer above, then assign to the
// posts piece of state inside the combineReducers call
// formReducer being applied to the form piece of state
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
})

export default rootReducer
