// our first action creator, to fetch list of users
// import axios as making api request
import axios from 'axios'

// we wait for the request to be completed, then we use dispatch, provided by redux-thunk, to dispatch an action

export const FETCH_USERS = 'FETCH_USERS'
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users')

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}
// error message: regeneratorRuntime is not defined
// due to async, needs setting up in index.js
// import babel-polyfil at top of index.js
