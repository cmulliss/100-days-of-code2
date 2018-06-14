import React, { Component } from 'react'

import AnimalList from '../containers/animal-list'
import AnimalDetails from '../containers/animal-details'

class App extends Component {
  render () {
    return (
      <div className='container app-container'>
        <h4>Hello to zookeeper</h4>
        <div className='row'>
          <div className='col-4'>
            <AnimalList />
          </div>
          <div className='col-8'>
            <AnimalDetails />
          </div>
        </div>
      </div>
    )
  }
}

export default App
