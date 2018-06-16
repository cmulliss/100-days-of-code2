import { FETCH_ANIMALS } from '../actions/constants'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_ANIMALS:
      console.log('fetch animals reducer ', action)
  }
  return state
}
