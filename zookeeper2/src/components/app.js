import React, { Component } from 'react'

import AnimalList from '../containers/animal-list'
import AnimalDetails from '../containers/animal-details'
import AnimalAdd from '../containers/animal-add'

class App extends Component {
  render () {
    return (
      <div className='container app-container'>
        <h4>Hello to zookeeper</h4>

        <div className='row'>
          <div className='col-12'>
            <AnimalAdd />
          </div>
        </div>

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
