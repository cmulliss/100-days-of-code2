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
          showValues: true,
          height: data.height,
          weight: data.weight,
          imageURL: data.sprites.front_default
        });
      })
      .catch(error => console.log(error));
  }
  // we want to bind the data to the specific state above
  // need to be clear what kind of data we want to get
  // ----- method to close tile on second click
  onCloseTile() {
    this.setState({
      showValues: false
    });
  }

  //----

  render() {
    //console.log(this.props);
    //console.log("state: ", this.state);
    if (!this.state.showValues) {
      return (
        <li onClick={this.onPokemonClick.bind(this)} className="card">
          name: {this.props.name}
        </li>
      );
    } else if (this.state.showValues) {
      return (
        <li onClick={this.onCloseTile.bind(this)} className="card">
          <div className="row">
            <div className="col-6">
              <p>name: {this.props.name}</p>
              <p>height : {this.state.height} </p>
              <p>width : {this.state.weight} </p>
            </div>
            <div className="col-6">
              <img src={this.state.imageURL} />
            </div>
          </div>
        </li>
      );
    } else {
      return <div>Loading ...</div>;
    }
  }
}
