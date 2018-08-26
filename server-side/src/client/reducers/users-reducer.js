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

// now have users-reducer that will create a users piece of state that will store our array of different users we fetch from the api
// need a new component to allow us to show the list of users on the screen
// will call our action creator, whenever it is mounted, to fetch our list of users, then we'll pull our list of users out of our redux state object and then render them as a list
//
