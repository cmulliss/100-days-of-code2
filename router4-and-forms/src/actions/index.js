import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = ' FETCH_POST'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=PENGUIN1234'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
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
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY} `)
  return {
    type: FETCH_POST,
    payload: request
  }
}
// this action creator will be called with the id
// of the post we want to delete, need to make network
// request and id is argument, and payload,
// interested in getting confirmation post deleted
// need to add another callback, to return to list
// of posts, go back to posts-show to do this
// receives callback from posts-show, and on a
// request will chain on .then etc to callback
// and take user to list of posts
export function deletePost (id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback())
  return {
    type: DELETE_POST,
    payload: id
  }
}
// going to make a network request, will need to install both axios and redux promise
// axios to make the network request
// redux-promise to handle the ansynchronous nature of request
// import redux promise in index.js
// and import axios into action creator

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
