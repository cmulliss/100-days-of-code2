import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
injectGlobal`
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }`

// get rid of index.css
// take global styles
// use injectGlobal helper
