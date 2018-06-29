import { combineReducers } from 'redux'

import BooksReducer from './books-reducer'
import ActiveBookReducer from './active-book-reducer'
// each key gets one reducer which is responsible
// creating this piece of state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
})

export default rootReducer
// single piece of state called books, a key of books
// where the value is whatever gets returned
// from the BooksReducer fn, an array of books

// reducer carries it OWN state, separate from app state
// reducers responsible for changing our apps state,
// via actions
