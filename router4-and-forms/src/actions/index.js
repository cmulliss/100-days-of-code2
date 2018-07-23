import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = ' FETCH_POST'
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
// start by receiving this as our callback fn, we want
// to make sure that only after the request here has
// succeeded, after the post has been created, do we
// want to call the callback manually. so we use a promise
// which is what is returned by 'axios.post'.
// in practise, make the API request, when successfully
// completed, execute the fn which then calls the
// callback that we passed in
export function createPost (values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request
  }
}
// new action creator, called with id of post we want to fetch
export function fetchPost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY} `)
  return {
    type: FETCH_POST,
    payload: request
  }
}
// going to make a network request, will need to install both axios and redux promise
// axios to make the network request
// redux-promise to handle the ansynchronous nature of request
// import redux promise in index.js
// and import axios into action creator
