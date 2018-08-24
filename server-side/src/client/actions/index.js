// our first action creator, to fetch list of users
// import axios as making api request
import axios from 'axios'
import { resolve4 } from 'dns'

// we wait for the request to be completed, then we use dispatch, provided by redux-thunk, to dispatch an action
export const FETCH_USERS = 'FETCH_USERS'
export const fetchUsers = () => async dispatch => {
  const res = axios.get('https://react-ssr-api.herokuapp.com/users')

  dispatch({
    type: FETCH_USERS,
    payload: resolve4
  })
}
