import axios from 'axios'
import {
  FETCH_ANIMALS,
  CREATE_ANIMAL,
  DELETE_ANIMAL
} from '../actions/constants'

// --- consts
const url = 'http://localhost:3000/animals'

// --- functions

export function selectAnimal (animal) {
  return {
    type: 'ANIMAL_CLICKED',
    payload: animal
  }
}

export function getAnimalsList () {
  return function (dispatch) {
    const request = axios.get(url)

    request
      .then(response => {
        dispatch({
          type: FETCH_ANIMALS,
          payload: response.data
        })
      })
      .catch(err => console.log(err))
  }
}
// creating createAnimal function
// need to pass an animal as an argument
export function createAnimal (animal) {
  return function (dispatch) {
    const post = axios.post(url, animal)
    post.then(response => {
      console.log('createAnimal promise response', response)
      dispatch({
        type: CREATE_ANIMAL,
        payload: response.data
      })
    })
  }
}
export function deleteAnimalById (id) {
  return function (dispatch) {
    const del = axios.delete(`${url}/${id}`)
    del
      .then(response => {
        dispatch({
          type: DELETE_ANIMAL,
          payload: response.status,
          id: id
        })
      })
      .catch(err => console.log(err))
  }
}

// dispatch to make thunk work

// asynchronous, so dont know how long it will take
// so ask for the response

// above, inside action, and if action triggered
// calling an axios object with the post method
// from this chaining the promise and resolwing
// the promise response
// post.then(response =>
//

// .catch(err => console.log(err))
//
// export function deleteAnimal (animal) {
//     return
// }
