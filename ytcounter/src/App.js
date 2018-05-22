import React, { Component } from 'react'

import store from './store/index'
import Counter from './counter'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Counter store={store} />
      </div>
    )
  }
}

export default App
