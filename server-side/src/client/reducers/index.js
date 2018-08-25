// combine our reducers here
import { combineReducers } from 'redux'
import usersReducer from './users-reducer'

export default combineReducers({
  users: usersReducer
})

// assign the users piece of state to key 'users'
// value of that will be coming from the usersReducer
// import the combinedReducers call into bothe the client.js file and the helpers/createStore.js file
