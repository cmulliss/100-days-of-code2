import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return <div>Select a book to get started</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}
// the object we return here, is going
// to turn up as props inside BookDetail
// prop of book, state activeBook
// (being produded by reducer)
// can now make us of this.props.book inside
// this container, because we mapped our app state
// to its props
function mapStateToProps (state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)

// needs to be wired up to redux state
// connect our app state to the props
// of this container

// when we first boot the app, this.props.book is null
// which means will enter the case above and return early
// from the render fn.
