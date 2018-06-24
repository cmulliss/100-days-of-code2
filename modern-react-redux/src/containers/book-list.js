import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li
          key={book.id}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'
        >
          {book.title}
        </li>
      )
    })
  }

  render () {
    console.log('this.props', this.props)
    return <ul className='list-group col-sm-4'>{this.renderList()}</ul>
  }
}

function mapStateToProps (state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps (dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)
// whatever is returned wil show up as props
// inside of BookList, returning object that
// that will be set = to this.props (above)

// purpose, to render a list of books
// list building by renderList fn
// creates a ul
// calls a helper fn, renderList
// this.renderList is going to map over an array of books
// for each book in the array create an li containing the book's title
// need to get our app state in here, as this.props.books
// want to plug in app state, need react-redux, connect
// promote to container (or smart component)
// has a direct connection to the state managed by redux
// books is the array of books
// take the app state and map to props
// (app state generated by reducers)
// whatever is returned will show up as props
// inside BookList (inside our container here)
// connect takes a fn and a component and produces a container
// A container is a component that is aware of the state
// mapStateToProps, first argument state, returns an object,
// object will be available to the component as this.props

// redux generated a state component that contained our books
// then mapped that state as props to our component
// because the state was updated, through our reducer,
// our component re-rendered with that list of books
