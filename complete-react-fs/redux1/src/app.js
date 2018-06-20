// src/app.js
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "./actions";
// trigger this before rendering everything, remember injecting the actions inside this.props
class App extends Component {
  componentWillMount() {
    this.props.moviesList();
  }

  renderMovies = movies => movies.map(item => <div> {item.name}</div>);

  render() {
    console.log("this.props.data.movies from App", this.props.data.movies);
    return <div>{this.renderMovies(this.props.data.movies)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
// in the app, need to bring something from redux, to connect them both
// import { connect } from 'react-redux'
// connect in charge of connecting whatever logic from redux with this app
// export default connect, with 2 arguments
// first (always) variable in connect, mapStateToProps, will go to redux and it's going to be working with the mapStateToProps
// The main fn of mapStateToProps?
// If we dispatch an action we trigger our moviesList fn
// This is going to the reducer and updating the store
// Within connect, mapStateToProps is going to always be listening for an action
// and when the action occurs and we have a new state, the constant mapStateToProps is going to run and be passing the new state within 'movies' in the movies reducer
// mapStateToProps is then going to grab the new state and inject it inside the App component, the class
// Now going to be able to enter this.props.data and we will have the list of movies
// console log this.props to see what we get
// this.props from App {data: "", dispatch: ƒ}
// import all actions into App
// so now all the fns, all the action creators, are going to be inside this variable called actions
// So now actions are inside mapStateToProps
// export default connect(mapStateToProps, actions)(App)
// we get 'moviesList' as a fn in console {data: "", moviesList: ƒ}
// So, in theory, triggering this action
// dispatch
// The second argument is going to be the actual dispatch
// Whenever we import an action, we trigger dispatch and begin to inject this action which is the fn.
// Going to inject this action back inside this.props
// doing much same as mapStateToProps but with the actions

// 1. first we connect and pass mapStateToProps that injects the new state inside the component
// 2. then we pass a second argument, the actions, so we can have the actions available inside this.props
// can just render the movies with a new function, renderMovies
