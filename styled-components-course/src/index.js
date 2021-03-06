import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { injectGlobal } from 'styled-components'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
body { 
    font-family: 'Gaegu', cursive !important;
}
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
