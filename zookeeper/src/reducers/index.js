import { combineReducers } from 'redux'

import animalReducer from './animal-reducer'

const rootReducer = combineReducers({
  // state: (state = () => state),
  animals: animalReducer
})

export default rootReducer

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

*/
