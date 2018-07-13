import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

export function fetchPosts () {
  const request = axios.get('')

  return {
    type: FETCH_POSTS
  }
}

// going to make a network request, will need to install both axios and redux promise
// import redux promise in index.js
// and import axios into action creator
