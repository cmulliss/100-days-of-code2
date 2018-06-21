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
