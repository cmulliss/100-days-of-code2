import { createStore } from 'redux'

const initalState = {
  count: 0
}
const reducer = (state = initalState, action) => {
  console.log('reducer running', action)

  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state)
  }
}
const store = createStore(reducer)
export default store

/*
Stage Two
Create the store
This is where our reducer lives, reducer runs in the store
import createStore
setup default / inital state
then we need to create a reducer, a fn with 2 arguments,
a state and an action
need to use initialState, see above, on first run will give
the value above, on subsequent runs it will actually be
passing in the state which will be changing.
Redux calls it the first time, then we call it subsequently
We pass in the reducer, then export the default store
and import it into the App

*/
