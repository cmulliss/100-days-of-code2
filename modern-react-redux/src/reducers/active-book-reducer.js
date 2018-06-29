// state argument is NOT app state, only the
// the state for which this reducer is responsible
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
// return current state if action dispatched
// that we don't care about

// state = null to avoid 'undefined'
// each time an active book is selected,
// new piece of state

// however, when redux boots, sends a couple
// of booting up actions through all the reducers
// our ActiveBooks reducer gets called, but isn't
// BOOK_SELECTED so returns state, which is null
// will try and render this.props.book.title
// but with a property of null
// so add intial check to render method in container
