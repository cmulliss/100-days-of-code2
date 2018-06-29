export function selectBook (book) {
  // selectBook is an ActionCreator,
  // it needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
  // console.log('a book has been selected:', book.title)
}
// create an action creaotor, selectBook
// take as it's argument, a book,
// which is an object with a title
// need to be able to call our action,
// whenever a user clicks on a book
// need to make sure the action that gets returned
// from this, runs through all our reducers
// going to further connect BookList
// by binding the selectBook action to BookList
