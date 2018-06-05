import React, { Component } from "react";

export default class App extends Component {
  state = {
    type: "1"
  };
  onSelectTypeChange(event) {
    // console.log("selectchange", event.target.value);
    this.setState({
      type: event.target.value
    });
  }
  // default behaviour of button is to force a reload
  onButtonClick(event) {
    event.preventDefault();
    // console.log(this.state.type + " " + "do something with this");
    const API_URL = `https://pokeapi.co/api/v2/type/3/`;

    fetch(API_URL).then(result => {
      //console.log(result);
      return result.json();
      console.log(result.json);
    });
  }
  render() {
    // console.log("app state: ", this.state);
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
      </div>
    );
  }
}
