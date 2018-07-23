import React, { Component } from 'react'

export default class PostsShow extends Component {
  render () {
    return <div>posts show</div>
  }
}
// need to be aware user might be entering app
// anywhere, on PostsIndex or PostsShow etc
// so, PostsShow needs to be responsible for
// fetching its own data, cant assume user
// first went to index page
// need to put together an action creator to
// fetch a particular post by id
// then over to reducer to add in a case to
// catch this new type and add it to our app
// level state
