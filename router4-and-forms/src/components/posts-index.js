import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  // doesn't make much difference calling the action creator
  // before or after compoent renders on screen
  //because fetching our data is an synchonous operation
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Posts Index</div>;
  }
}
export default connect(
  null,
  (fetchPosts: fetchPosts)
)(PostIndex);
// state as an object
// the url the user visits is actually a critical piece of app state
// would make more sense to store our list of posts inside an object, instead of an array
// up to now, have made use of the connect helper
// by defining the mapDispatchToProps function
// to get the action creator directly into a component
// so we can call it off the props object
// but can use a shortcut
// first define our mapStateToProps argument of null
// because we are not passing mapStateToProps
// then as the second argument, rather than passing in that extra function, we are just going to pass in the action creator itself inside an object
// When are we going to call the action creator?
// when are we going to reach out to the APi and call the list of posts?
// rather than waiting for an event,
// we want this to happen as soon as it renders
// fetch this list of posts by calling the action creator
// right now our particular key doesn't have any posts associated with it, so we got back an empty array
//
