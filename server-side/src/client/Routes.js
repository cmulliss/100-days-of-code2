import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'

export default () => {
  <div>
    <Route exact path='/' component={Home} />
  </div>
}

// export functional component, contains
// div with all the different route mappings

// need to import this mapping into both the
// client.js file and the index.js (renderer)
// file, set up separate router in each
