import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

// instead of root route, /, we use * so express
// will handle all routes inside our app
// tells express to treat public dir as a static or public dir
app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore()
  // some logic to initialize
  // and load data into the store, so now all
  // our loadData fns will have a ref to our ss redux store
  // will return an array, so assign to a var called promises
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })
  // when all data loading fns finished, will render app
  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})
// shows promise that is representing that network request to go to our api and fetch that list of users, when resolved, network request completed and ready to render app

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
// going to use webpack-node-externals
// inside our route handler, going to use fn to create a store
// then going to take that store and pass it in as a second arg to the renderer

// to avoid regeneratorRuntime is not defined error, with action creator, import babel-polyfill
// also import into client.js
