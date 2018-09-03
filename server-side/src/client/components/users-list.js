import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  renderUsers () {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render () {
    return (
      <div>
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}
// going to assume we have a prop, users, so we need to map over that list of users and render out some element for every user we loaded up
function mapStateToProps (state) {
  return { users: state.users }
}
function loadData (store) {
  // manual dispatch, calling fetchUsers action creator
  // and pass results into store.dispatch
  // make network request to api, going to return a promise
  // representing the nework request
  return store.dispatch(fetchUsers())
}
export { loadData }
export default connect(mapStateToProps, { fetchUsers })(UsersList)
// as soon as this compoent gets rendered on the screen its going to attempt to grab the list of users
// then a starter render method
// then mapStateToProps fn, will take our state object and return an object with users coming from state.users
// and connect
// the reducer we just created is being assigned to the users property of our state object
