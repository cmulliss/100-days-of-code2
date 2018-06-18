// import types
import {
  FETCH_ANIMALS,
  CREATE_ANIMAL,
  DELETE_ANIMAL
} from '../actions/constants'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_ANIMALS:
      // console.log('fetch_animals_reducer', action);
      return action.payload
    case CREATE_ANIMAL:
      return { ...state, id: action.payload }
    case DELETE_ANIMAL:
      console.log('reducer DELETE_ANIMAL:state', state)
  }
  return state
}
// want to update list on creating an animal
// import CREATE_ANIMAL

// console.log('reducer DELETE_ANIMAL', action) use this to
// check what is bound to the action

// logging the action payload, then the state of the component
// need to add the last animal to state
