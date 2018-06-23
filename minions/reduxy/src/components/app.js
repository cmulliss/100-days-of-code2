// src/components/App.js
import React from 'react'

import List from './list'
import Form from './form'

const App = () => (
  <div className='container'>
    <div className='row mt-5'>
      <div className='col-md-4 offset-md-1'>
        <h2>Articles</h2>
        <List />
      </div>
      <div className='col-md-4 offset-md-1'>
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  </div>
)
export default App

// in output, the List component on the left is connected to the Redux store. It will re-render whenever you add a new item.
