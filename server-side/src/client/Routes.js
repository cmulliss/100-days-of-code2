import React from 'react'
// import { Route } from 'react-router-dom'
import Home from './components/Home'
import UsersList, { loadData } from './components/users-list'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData: loadData,
    path: '/users',
    component: UsersList
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
