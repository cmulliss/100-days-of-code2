import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=PAPERCLIP1234'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

// going to make a network request, will need to install both axios and redux promise
// axios to make the network request
// redux-promise to handle the ansynchronous nature of request
// import redux promise in index.js
// and import axios into action creator
