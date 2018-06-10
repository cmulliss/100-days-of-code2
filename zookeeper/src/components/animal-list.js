import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnimalList extends Component {
  // ------fn to render animalsList
  renderAnimalsList () {
    return this.props.animals.map(animal => {
      return (
        <li>
          <p>Species: {animal.species}</p>
        </li>
      )
    })
  }

  // ------
  render () {
    console.log('animalList: ', this)

    return <div>animal list</div>
  }
}

function mapStateToProps (state) {
  //   return {
  //     name: 'motley'
  //   }

  // to see what is inside the state
  // console.log('mapStateToProps', state)
  // the RHS, the reducer side, bound to the state of our app,
  // the state of our store,
  // binding the state of the animals to the animals inside our components
  return {
    animals: state.animals
  }
}

export default connect(mapStateToProps)(AnimalList)

/* 1. we need to bring the state of the app to the props on the component usiing redux connect
2. mapping above state to props, can see 'motley' on props in console,
returning 'motley' from the fn, and binding it to the props
3. can also pull parentProps through from App, but still retain the props from this component
4. need to return something, from animalList, in our 'connect' method
5. return 'animals' from state
6. there are 5 animals bound to the state
7. console:
mapStateToProps {animals: Array(5)}animals: (5) [{…}, {…}, {…}, {…}, {…}]
8. so what happened here is that via binding the reducer (in reducers/index.js) we have, in the whole application state, something like animals (we can call it what we like, we are binding the state to it)
9. see reducers/index.js
10. const rootReducer = combineReducers({
  animals: animalReducer
1. The RHS, in the rootReducer, is bound via the reducer, bound to the state of the application
animalReducer
2. The LHS of the rootReducer is bound to the properties of the component, on the props object
animals:

NB: put fns outside class
*/
