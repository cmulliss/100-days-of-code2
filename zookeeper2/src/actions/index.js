import axios from 'axios'

export function selectAnAnimal (animal) {
  return {
    type: 'ANIMAL_CLICKED',
    payload: animal
  }
}
export function getAnimalsList () {
  return function (dispatch) {
    const url = `http://localhost:3000/animals`

    const request = axios.get(url)
    request
      .then(response => {
        dispatch({
          type: 'FETCH_ANIMALS',
          payload: response.data
        })
      })
      .catch(err => console.log(err))
  }
}
