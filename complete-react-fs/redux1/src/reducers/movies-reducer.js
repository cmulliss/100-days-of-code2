// reducers/movies-reducer.js
// 1. an ACTION is returning an object, which enters here

// 2. In here, a REDUCER is trying to find a match with whatever we pass from the type of the action

export default function (state = {}, action) {
  switch (action.type) {
    case 'MOVIES_LIST':
      return { ...state, movies: action.payload }

    default:
      return state
  }
}
