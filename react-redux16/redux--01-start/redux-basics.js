// using node syntax
const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter: 0
}

// reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state
}
// store, needs to be initialised by a reducer, reducer strongly
// connected to the store, only thing that may update the state.
const store = createStore(rootReducer)
console.log(store.getState())

// subscription
store.subscribe(() => {
  console.log('[Subscription', store.getState())
})

// dispatching action
store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 10 })
console.log(store.getState())

/* subscriptions: make sure I don't have to manually call getState, in my code, if I want to get the current state snapshot, but to inform me whenever I need to get a new state because something changed.
Subscribe takes an argument, a fn which will be executed whenever the state is updated.

Subscribe comes before dispatching the actions, and the fn in the subscribe method will be executed whenever an action is dispatched and mutates the store.

Subscription gets triggered whenever the state is updated. */
