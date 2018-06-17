import React, { Component } from "react";

class AnimalAdd extends Component {
  state = {
    name: "",
    species: "",
    gender: "m",
    age: 0
  };
  // need to bind input, with simple method
  //----methods

  onNameChange = event => {
    // bind it to the state, as type in, gets bound to state
    this.setState({
      name: event.target.value
    });
  };

  onSpeciesChange = event => {
    this.setState({
      species: event.target.value
    });
  };

  onSelectGenderChange = event => {
    this.setState({
      gender: event.target.value
    });
  };

  onAgeChange = event => {
    this.setState({
      age: event.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="form-group">
        <form>
          <label>
            Name:
            <input
              onChange={this.onNameChange.bind(this)}
              value={this.state.name}
              type="text"
            />
          </label>
          <label>
            Species:
            <input
              onChange={this.onSpeciesChange.bind(this)}
              value={this.state.species}
              type="text"
            />
          </label>
          <br />
          <label>
            Gender:
            <select>
              <option value="m">male</option>
              <option value="f">female</option>
            </select>
          </label>
          <label>
            Age:
            <input
              onChange={this.onAgeChange.bind(this)}
              value={this.state.age}
              type="number"
            />
          </label>
        </form>
        <button className="btn btn-success">Create Animal</button>
      </div>
    );
  }
}

export default AnimalAdd;
