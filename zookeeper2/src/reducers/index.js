import { combineReducers } from 'redux'

import animalReducer from './animal-reducer'
import selectedAnimalReducer from './selected-animal-reducer'

const rootReducer = combineReducers({
  animals: animalReducer,
  selectedAnimal: selectedAnimalReducer
})

export default rootReducer

// in rootReducer, need to bind to the global store

// state returning an empty object to start

/*
const rootReducer = combineReducers({
  animals: animalReducer
1. The right side, in the rootReducer, is bound via the reducer
animalReducer
2. The left side of the rootReducer is bound to the state of the app
animals:
3. we choose to call LHS 'animals' can call it anything, but then need to use 'animals' in mapStateToProps in animalList.
4. declare in rootReducer as 'animals'

Importing the animalReducer, which will be bound to 'animals' in the rootReducer

We need to bring the state of the application, to the props on the component, this where the redux 'connect' method comes into play.

*/
