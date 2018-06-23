import { combineReducers } from 'redux'

import BooksReducer from './books-reducer'

const rootReducer = combineReducers({
  books: BooksReducer
})

export default rootReducer
// single piece of state called books, a key of books
// where the value is whatever gets returned
// from the BooksReducer fn, an array of books
