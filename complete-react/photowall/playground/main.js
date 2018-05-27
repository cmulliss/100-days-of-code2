import React, { Component } from 'react'

import List from './list'
import Title from './title'

export default class Main extends Component {
  render () {
    return (
      <div>
        <Title newTitle={'Todo List'} />
        <List tasks={['mow lawn', 'walk dog']} />
        <List tasks={['washing up', 'clean sink']} />
      </div>
    )
  }
}
