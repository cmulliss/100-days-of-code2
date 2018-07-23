import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers'
import PostsIndex from './components/posts-index'
import PostsNew from './components/posts-new'
import PostsShow from './components/posts-show'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

// put most specific routes at top of switch
// :id is a wild card, needs to be second route
// or wild card would work for post/new
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/posts/:id' component={PostsShow} />
          <Route exact path='/' component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
)
