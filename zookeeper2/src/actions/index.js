export function selectAnAnimal (animal) {
  return {
    type: 'ANIMAL_CLICKED',
    payload: animal
  }
}

export function fetchAnimals () {
  // some ajax -> let response = do ajax magic here

  return {
    type: 'FETCH_ANIMAL'
    // payload: response
  }
}
