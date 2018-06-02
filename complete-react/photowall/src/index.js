import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './css/styles.css'
import Main from './components/main'

render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.querySelector('#root')
)

// import App from './App'

// const tasks = ['clean sink', 'ironing', 'make yoghourt']

// const element = (
//   <div>
//     <h1>Task List</h1>
//     <ol>{tasks.map((task, index) => <li key={index}>{task}</li>)}</ol>
//   </div>
// )

// taking our tasks from props, rather than the hard coded []
// 'this' keyword is important, it points to the component
//  instance of the class that's being renderd.
// checking whether any tasks passed on from the component
// instance as props.

// can also add unique key provided by 'map'
// only use key if no stable index in array
// instances of Title and List
