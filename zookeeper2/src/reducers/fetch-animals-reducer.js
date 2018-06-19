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
      let newState = [...state]
      newState.push(action.payload)
      return newState
    case DELETE_ANIMAL:
      // console.log('reducer DELETEANIMAL:state', state)
      if (action.payload === 200) {
        let newState = state.filter(elem => {
          return elem.id !== action.id
        })
        return newState
      } else {
        console.log('an error occured', action)
      }
  }
  return state
}
// in delete, looking for status code, 200 is success
// state here is an array of objects, want to filter out the one to delete
// so, filtering the state object, filtering out the action.id and returning
// every element that is not the given element I clicked to remove, then returning the others instead.

// want to update list on creating an animal
// import CREATE_ANIMAL

// console.log('reducer DELETE_ANIMAL', action) use this to
// check what is bound to the action

// logging the action payload, then the state of the component
// need to add the last animal to state
