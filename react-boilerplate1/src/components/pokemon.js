import React, { Component } from "react";

export default class Pokemon extends Component {
  state = {
    showValues: false,
    imageURL: "",
    height: 0,
    weight: 0
  };

  // ---- provide an onClick method here
  onPokemonClick() {
    //console.log(this.props.url);

    fetch(this.props.url)
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data);

        this.setState({
          height: data.height,
          weight: data.weight,
          imageURL: data.sprites.front_default
        });
      })
      .catch(error => console.log(error));
  }
  // we want to bind the data to the specific state above
  // need to be clear what kind of data we want to get
  // -----

  render() {
    //console.log(this.props);
    console.log("state: ", this.state);

    return (
      <li onClick={this.onPokemonClick.bind(this)} className="card">
        name: {this.props.name}
      </li>
    );
  }
}
