import React, { Component } from 'react'

class PokemonList extends Component {
  //   constructor (props) {
  //     super(props)
  //   }

  // ----- functions
  renderPokemons () {
    // counter to provide keys
    let counter = 0

    return this.props.pokemonResult.map(pokemons => {
      console.log(pokemons)
      return (
        <li className='card' key={counter++}>
          name: {pokemons.pokemon.name}
        </li>
      )
    })
  }
  // ------

  render () {
    // console.log('list props:', this.props)
    // one way to do it
    if (this.props.pokemonResult.length > 0) {
      return <ul>{this.renderPokemons()}</ul>
    }
    return <div>Loading ...</div>
  }
}

export default PokemonList
// on the 'this' object we can access both the props
// and the state of the object

// the parent App -> selection that setsState -> App click button -> AJAX call against our pokemon API -> success - the data will be bound to the state of the App component -> child of App, pokemonList -> has props, we pass the state of the parent component to the child component via props

// App click button, grab our state off the App component, with the type (using the dropdown), and we insert our type into our AJAX request, so search for type, click button, can inspect in console.
// The state is altered, the complete list if bound to the pokemonList of the App, everything wll be passed down to the pokemonList.

// code was in render
// console.log(
//     'this.props, the props of this component, pokemonList component:',
//     this.props
//   )

// alternative way to render
// return (
//   <div>
//     {this.props.pokemonResult.length > 0 && (
//       <div>List is loaded and ready</div>
//     )}
//   </div>
// )
