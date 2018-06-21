// src/app.js
import React, { Component } from "react";
import { connect } from "react-redux";

import { moviesList } from "../actions";
// trigger this before rendering everything, remember injecting the actions inside this.props
class App extends Component {
  componentWillMount() {
    // this.props.nameOfAction()
    //this.props.moviesList(); is replaced by:
    this.props.getMovies;
  }

  renderMovies = movies =>
    movies ? movies.map(item => <div> {item.name}</div>) : null;

  render() {
    return <div>{this.renderMovies(this.props.data.movies)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies
  };
};
// moviesList is the action we have imported, is a fn
//dispatch also a fn
// so now instead of using this.props.
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMovies: () => {
      dispatch(moviesList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// can just render the movies with a new function, renderMovies
//
