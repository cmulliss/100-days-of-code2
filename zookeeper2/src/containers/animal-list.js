import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectAnAnimal, getAnimalsList } from '../actions/index'

// we are inside map, and 'this' points to animal, and we are calling the props, so we are calling the action which is imported

class AnimalList extends Component {
  // ------- lifecycle method
  componentWillMount () {
    console.log('component will mount')
  }
  componentDidMount () {
    console.log('component did mount')
  }

  // ------fn to render animalsList, own method
  renderAnimalsList () {
    let counter = 0
    return this.props.animals.map(animal => {
      return (
        <li
          onClick={() => {
            this.props.selectAnimal(animal)
          }}
          className='list-group-item'
          key={counter++}
        >
          <p>Name: {animal.name}</p>
        </li>
      )
    })
  }

  // ------
  render () {
    console.log('render')
    return (
      <ul className='list-group'>
        {this.renderAnimalsList()}
        <button
          onClick={() => {
            this.props.getAnimalList()
          }}
          className='btn btn-success'
        >
          Click me to fetch the server
        </button>
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    animals: state.animals,
    selectedAnimal: state.selectedAnimal
  }
}
// calling selectAnimal, is bound to the props, comes from the actions, using it onClick, and after click is done it flows from the action to the reducer, then to the store.
function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      selectAnimal: selectAnAnimal,
      getAnimalList: getAnimalsList
    },
    dispatch
  )
}
// the order counts, first mapStateToProps, second mapDispatchToProps
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalList)

// constructor
// lifecycle
// own method
// react render

// console.log('render animalList: ', animal)
// selectAnimal is the fn bound to the props and bound to the scope of the specific clicked animal. The fn wants an animal

// binding selectAnimal (L) fn as appears inside component, how you bind it to the props
// to (R), selectAnAnimal, the action we have bound to this, how it comes from the actions

// a wrapped component because it's wrapped inside the connect method
// and provided with some more functionality, ie a HOC
// higher order component

// This is actually a container, a higher order component, is a 'wrapped component' because it is
//   return {
//     name: 'motley'
//   }

// to see what is inside the state
// console.log('mapStateToProps', state)
// the RHS, the reducer side, bound to the state of our app,
// the state of our store,
// binding the state of the animals to the animals inside our components

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
