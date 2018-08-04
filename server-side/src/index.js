import express from 'express'
import renderer from './helpers/renderer'

const app = express()

// instead of root route, /, we use * so express
// will handle all routes inside our app
app.use(express.static('public'))
app.get('*', (req, res) => {
  res.send(renderer(req))
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
