export function selectAnAnimal(animal) {
  return {
    type: 'ANIMAL_CLICKED',
    payload: animal
  }
}
