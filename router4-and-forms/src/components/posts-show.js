import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPost, deletePost } from '../actions'
// when do you want to call this action creator?
// props provided by react router, params object
// will contain all the different wildcard values
// existing inside our given url
class PostsShow extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }
  // handler, using props, because deletePost is an
  // action creator, and pass in id of post
  // retrieve id as above
  // wait for request to be completed, the nav
  // back to list of posts, being passed as
  // second argument to deletePost, do to action
  // creator which will receive that callback

  onDeleteClick () {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => this.props.history.push('/'))
  }
  // above, takes care of fetching an individual post
  // with given id, next takes care of deleting post
  // wire up deletePost to connect helper at bottom

  render () {
    const { post } = this.props

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link className='btn btn-primary' to='/'>
          Back To Index
        </Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}
// above, takes care of fetching an individual post
// with given id,

// this is the big list of posts in our app
// but now will only ever receive singlepost
function mapStateToProps ({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow)
// the compoent only really cares about one particular
// post, so rather than passing the big list of posts
// into this component, need a way to only pass in a
// single post. Using 2nd arg, ownProps, which is the
// props object which is going to this component.
// this.props is === to ownProps
// so can pass single post
// finally need to take the post and show it in the
// render fn

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

// we have put together our fetchPost action creator
// and wired it up to our reducer
// now import our action creator and wiring it up
// to this component, making sure we can fetch the
// actual post and display it inside of here too
// import connect helper and action creator

// we don't yet have a mapStateToProps fn so null
// and 2nd argument action creator, when do you want
// to call this action creator? use componentDidMount
// so now the moment this component appears on screen
// the action creator will fetch that post,
// it will get aded to our piece of state and that
// means we need to take that post out of our app level
// state and get it into our component with a
// mapStateToProps function, will be called with the
// state object, but only care about posts piece
// of state property

// best to use params as will always have id object
