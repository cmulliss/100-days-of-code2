import React, { Component } from "react";

import PokemonList from "./pokemon-list";

export default class App extends Component {
  state = {
    type: "1",
    pokemonList: []
  };
  //-----functions, methods of the class
  // related to selectDropdown, provided to the onChange property
  onSelectTypeChange(event) {
    // console.log("selectchange", event.target.value);
    this.setState({
      type: event.target.value
    });
  }
  // default behaviour of button is to force a reload
  // provided to onClick method of button
  // resolved in the promise
  onButtonClick(event) {
    event.preventDefault();

    //const type = this.state.type;
    const API_URL = `https://pokeapi.co/api/v2/type/${this.state.type}/`;

    // data is the whole object
    //fetch(`https://pokeapi.co/api/v2/type/${type}/`)
    fetch(API_URL)
      .then(result => {
        //console.log(result);
        return result.json();
        console.log(result.json);
      })
      .then(data => {
        console.log(data);
        console.log(data.pokemon);
        this.setState({
          pokemonList: data.pokemon
        });
      })
      .catch(error => console.log(error));
  }
  // set the state to an empty array, then check the app state
  // then bind the results of the ajax call to the state, so state
  // now is the complete array of 70 pokemon
  render() {
    console.log("app state: ", this.state);

    return (
      <div className="container app-container">
        <div>
          <h4>Our Small Pokemon App</h4>
          <form>
            <label>Choose your Pokeman type: </label>
            <br />
            <select onChange={this.onSelectTypeChange.bind(this)}>
              <option value="1">Normal</option>
              <option value="2">Fighting</option>
              <option value="3">Flying</option>
              <option value="4">Poison</option>
            </select>
            <button
              onClick={this.onButtonClick.bind(this)}
              className="btn btn-success"
            >
              Search for type
            </button>
          </form>
        </div>
        <PokemonList pokemonResult={this.state.pokemonList} />
      </div>
    );
  }
}
// want to pass down to child, which is <PokemonList/>
// pass this.state.pokemonList down
