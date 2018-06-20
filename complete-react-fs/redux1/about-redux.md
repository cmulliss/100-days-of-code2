# Redux

Three things need to do on beginning any project:
1. call / import the dependencies
2. create the variable that binds the middleware with createStore
3. then pass the store to the provider

## In src/index.js

* createStoreWithMiddleware will receive a list of all the reducers in the app
* import reducers
* pass reducers to store

* is creating a store with the middleware, the provider needs  
the connection. createStore is going to be working with middleware

* store to connect react-redux with redux, 'store' is the connection
between them.

```javascript
// src/index.js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
* Before we do anything, this __store__ and __createStoreWithMiddleware__ is going to need a list of all the reducers inside our app

## In reducers

* Create reducers directory and index file
* Then files for individual reducers
* __createStoreWithMiddleware__ is going to be receiving the __reducers__
* We need to combine all the reducers, do this in __reducers/index.js__
* Then pass them to __createStoreWithMiddleware__
* __combineReducers__ is going to be passing __rootReducer__
* __rootReducer__ will be receiving a list of all the reducers (as an object)
* export it, so available to other components

```javascript
// reducers/index.js
import { combineReducers } from 'redux'
import movies from './movies-reducer'

const rootReducer = combineReducers({
  movies
})
export default rootReducer

```

* Then create movies-reducer.js
1. An ACTION is returning an object, which enters here
2. In here, a REDUCER is trying to find a match with whatever we pass from the type of the action
* Two arguments, (state is previous state)
* Going to be receiving an action, which is an object,
* and we are going to be searching, with a switch,
* for that __action__, then that __type__.
* So whenever we find a match will be updating the state
* start with state set to an empty object
* if matches, don't want to mutate, so use spread operator,
* We pass the object with the previous state and then added whatever we are getting from the payload.
* Going to return a new state, and this is going to be equal to movies, with the list of movies
* Reducer is just a fn, with a __previous state__ and an __action__
* and whenever we find a match for the keyword inside the action, we returned the __previous state__  and whatever data we get from the __action.payload__
* the purpose of the reducer, to update state within redux
* Now need to produce an action creator that connect to this reducer and passes all the information 'MOVIES_LIST'

```javascript
// reducers/movies-reducer.js
// 1. an ACTION is returning an object, which enters here
// 2. In here, a REDUCER is trying to find a match with whatever we pass from the type of the action
export default function (state = {}, action) {
  switch (action.type) {
    case 'MOVIES_LIST':
      return { ...state, movies: action.payload }

    default:
      return state
  }}

```

## Actions and action creators

* The action creator is going to connect to the reducer
* Only thing this fn needs to do is return an object
need to match with the reducer, 'MOVIES_LIST'
* payload is the data from the server, the list of movies
just an array of object with 3 movies
* always returns a type and a payload

### Summary so far

1. Our app starts and our component is going to call the fn in our action
2. This fn is going to go to our reducers, and it's going to be finding a match with 'MOVIES_LIST'
3. The reducer is going to be returning the previous state togeether with the movies we have inside the action creator, in action.payload
4. The combined reducers are always going to be listening for what happens inside the reducers
5. Going to be detecting a change, going to be connecting to the app, to the provider, going to say OK, just received new data, I have a new state, and it's going to be passing and storing the new state.
6. The app is going to know we got a new state and is going to be able to access that state from within the component.
* However, no connection between the action creator and the reducer

## App.js

* moviesList is the name of the action
* so, this.props.moviesList
* is going to run whatever fn we have in that action
* is going to pass the payload to the reducers and then
* the reducers will return the info and run the mapStateToProps, which will contain a new state, with the actual data with the movies
* then mapStateToProps is going to inject whatever state we get inside this.props
* so we can have data: state.movies in mapStateToProps
* the first time it reloads, no data
* then mapStateToProps is going to receive new data in the state
  and inject everything
* app re-renders and inside data we have movies and the array of movies

* in the app, need to bring something from redux, to connect them both
* import { connect } from 'react-redux'
* connect in charge of connecting whatever logic from redux with this app
* export default connect, with 2 arguments
* first (always) variable in connect, mapStateToProps, will go to redux and it's going to be working with the mapStateToProps
* The main fn of mapStateToProps?
* If we dispatch an action we trigger our moviesList fn
* This is going to the reducer and updating the store
* Within connect, mapStateToProps is going to always be listening for an action
* and when the action occurs and we have a new state, the constant mapStateToProps is going to run and be passing the new state within 'movies' in the movies reducer
* mapStateToProps is then going to grab the new state and inject it inside the App component, the class
* Now going to be able to enter this.props.data and we will have the list of movies
* console log this.props to see what we get
* this.props from App {data: "", dispatch: ƒ}
* import all actions into App
* so now all the fns, all the action creators, are going to be inside this variable called actions
* So now actions are inside mapStateToProps
* export default connect(mapStateToProps, actions)(App)
* we get 'moviesList' as a fn in console {data: "", moviesList: ƒ}
* So, in theory, triggering this action

## dispatch

* The second argument is going to be the actual dispatch
* Whenever we import an action, we trigger dispatch and begin to inject this action which is the fn.
* Going to inject this action back inside this.props
* doing much same as mapStateToProps but with the actions

1. first we connect and pass mapStateToProps that injects the new state inside the component
2. then we pass a second argument, the actions, so we can have the actions available inside this.props
* can just render the movies with a new function, renderMovies





NB: install React Redux ES6 Snippets
timothymclane.react-redux-es6-snippets
Timothy McLane
* then type 'map' to get mapStateToProps
