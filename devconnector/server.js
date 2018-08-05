const express = require('express')
const mongoose = require('mongoose')

// const users = require('./routes/api/users')
/// /const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

// Use Routes
// app.use('/api/users', users)
// app.use('/api/profile', profile)
// app.use('/api/posts', posts)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))

// import the express library
// then initialise a var called app to express
// this app can then be used to start a server and specify server behavior
// simple route, 2 parameters, request and response object
// create variable port, run on port 5000
// to deploy to Heroku, use
// const port = process.env.PORT || 5000
// or locally, 5000
// 2 paramenters, port and callback
// then, in package.json, add an npm script, as want to use nodemon
// connecting to MongoDB with mongoose

// connect to MongoDB via mongoose
// can use a promise here, if we get a promise returned
// .then is success, so => fn if connects successfully
// if problem, .catch
