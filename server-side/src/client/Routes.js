import React from 'react'
// import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
// usersListPage an object with a key component and a key of loadData
import UsersListPage from './pages/UsersListPage'

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users'
  }
]

// export functional component, contains
// div with all the different route mappings

// need to import this mapping into both the
// client.js file and the index.js (renderer)
// file, set up separate router in each

// dummy route
// <Route path='/hi' component={() => 'Hi'} />

// going to use react-router-config, subset of react-router, but will mangle our routes
// need to define them in an array of objects
