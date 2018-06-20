// actions/index.js
// list of ALL the actions

export function moviesList () {
  return {
    type: 'MOVIES_LIST',
    payload: [
      { id: '1', name: 'Pulp Fiction' },
      { id: '2', name: 'True Lies' },
      { id: '3', name: 'Rambo' }
    ]
  }
}
// only thing this fn needs to do is return an object
// need to match with the reducer, 'MOVIES_LIST'
// payload is the data from the server, the list of movies
// just an array of object with 3 movies
// always returns a type and a payload

// Summary so far
// 1. Our app starts and our component is going to call the fn in our action
// 2. This fn is going to go to our reducers, and it's going to be finding a match with 'MOVIES_LIST'
// 3. The reducer is going to be returning the previous state togeether with the movies we have inside the action creator, in action.payload
// 4. The combined reducers are always going to be listening for what happens inside the reducers
// 5. Going to be detecting a change, going to be connecting to the app, to the provider, going to say OK, just received new data, I have a new state, and it's going to be passing and storing the new state.
// 6. The app is going to know we got a new state and is going to be able to access that state from within the component.
// However, no connection between
