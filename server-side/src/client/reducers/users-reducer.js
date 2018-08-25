import { FETCH_USERS } from '../actions/index'
// FETCH_USERS is a named import, so needs {}

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data
    default:
      return state
  }
}
// matching reducer to watch for the FETCH_USERS action
// the list of users is within an array, so going to default our initial state to be an empty array,
// will receive the action as the second argument
