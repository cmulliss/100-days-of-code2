import { FETCH_POSTS } from '../actions'

// will receive previous state and an action
// default our state to an object for list of posts
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.date, 'id')
      console.log(action.payload.data) // [post1, post2]
    // {4: post}
    default:
      return state
  }
}

// import our type from actions/index.js
// use lodash to create object from array
// will give initial list of posts
//
