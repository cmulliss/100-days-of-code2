import React, { Component } from "react";
import { connect } from "react-redux";
// this is how we bind the 'dispatch' inside the component
// to the action itself
import { bindActionCreators } from "redux";

// import our action
import { createAnimal } from "../actions/index";

// --- class begins here

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

  onButtonSubmit = () => {
    console.log("from button, this.state", this.state);
    this.props.createAnimal(this.state);
    //console.log("log the state of the component", this.state);
    // use action createAnimal(this.state)
    // mirrors our state above, but how do we do this?
  };

  //--- end of methods

  render() {
    //console.log(this.state);
    // console.log("this.props in AnimalAdd", this.props);
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
            <select onChange={this.onSelectGenderChange.bind(this)}>
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
        <button onClick={this.onButtonSubmit} className="btn btn-success">
          Create Animal
        </button>
      </div>
    );
  }
}
// we want to wire up our createAnimal action to the button

// L side is bound to our props, so could be
// isBoundToOurProps: createAnimal
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // createAnimal: createAnimal
      createAnimal
    },
    dispatch
  );
}
export default connect(
  null,
  mapDispatchToProps
)(AnimalAdd);
// above, how we bind our methods together, R side is what
// we want to bind it to createAnimal from actions/index.js
// the L is just the name, what is bound to our props
//export default AnimalAdd;
// created a connected version of component, where we bound
// the actions to the props
