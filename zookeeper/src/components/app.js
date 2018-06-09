import React, { Component } from 'react'

import AnimalList from './animal-list'

class App extends Component {
  render () {
    return (
      <div className='container app-container'>
        <h4>Hello to zookeeper</h4>
        <AnimalList />
      </div>
    )
  }
}

export default App
