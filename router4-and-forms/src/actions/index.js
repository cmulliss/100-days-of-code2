import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=PENGUIN1234'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
// second argument to make sure post is made with values
// from the form
// then need to see what happens in the reducer when it
// see an action of type createPost?
export function createPost (values) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)

  return {
    type: createPost,
    payload: request
  }
}

// going to make a network request, will need to install both axios and redux promise
// axios to make the network request
// redux-promise to handle the ansynchronous nature of request
// import redux promise in index.js
// and import axios into action creator
