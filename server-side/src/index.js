import express from 'express'
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
  // and load data into the store

  res.send(renderer(req, store))
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
// going to use webpack-node-externals
// inside our route handler, going to use fn to create a store
// then going to take that store and pass it in as a second arg to the renderer
