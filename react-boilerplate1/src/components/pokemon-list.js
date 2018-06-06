import React, { Component } from "react";

class PokemonList extends Component {
  state = {
    message: "hello react world"
  };

  render(props) {
    //console.log("list props:", this.props.pokemonResult);
    console.log("this:", this);

    return <div>pokemon list</div>;
  }
}

export default PokemonList;
