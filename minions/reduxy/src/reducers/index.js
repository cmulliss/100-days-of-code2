// src/reducers/index.js
import { ADD_ARTICLE } from '../constants/action-types'
const initialState = {
  articles: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] }
    default:
      return state
  }
}

export default rootReducer
/*
n the example above the initial state is left utterly untouched.

The initial articles array doesn’t change in place.

The initial state object doesn’t change as well. The resulting state is a copy of the initial state.
*/
