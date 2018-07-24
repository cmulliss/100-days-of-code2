import _ from 'lodash'

import { FETCH_POSTS } from '../actions'
import { FETCH_POST } from '../actions'
import { DELETE_POST } from '../actions'

// will receive previous state and an action
// default our state to an object for list of posts
export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload)
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data }
    case FETCH_POSTS:
      console.log('initial list of posts', action.payload.data) // [post1, post2]
      // {4: post}
      return _.mapKeys(action.payload.data, 'id')

    default:
      return state
  }
}
// need to remove deleted post from local state
// import DELETE_POST type, the create another
// case statement. Teh actions payload contains th
// id of the deleted post, so we need to reach into
// the state object and rid of key and value
// use a helper, from lodash library, 'omit'
// if state object had payload of deleted key
// drop it and return state without it
// does not modify existing state object
// returns a new state object
// benefit of using an object, rather than an []
// for state management

// import our type from actions/index.js
// use lodash to create object from array
// will give initial list of posts
//
// need to see what happens in the reducer when it
// see an action of type createPost?
// adding case, want to retain all our existing app
// level state, not lose it, so to maek sure we take
// all the posts we've already fetched and include
// them in here, we'll use ...state
// take all existing posts out of state object and
// put them into this new object we are about to return
// and add a new key value pair, where the key will be
// the id of the post we fetched and the value the post itself
// remember, the posts that we fetch is available as an
// action.payload.data because we are using axios
// and the data that we care about is on the data property
//
//   const post = action.payload.data
//   const newState = { ...state }
//   newState[post.id] = post
//   return newState
// using es6, [] are not creating an array,
// but doing key interpolation
// make a new key on this object using contents
// of [], and value = to action.payload.data
