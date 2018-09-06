import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from '../client/Routes'
import { Provider } from 'react-redux'
// to avoid xss, will escape any characters involved in setting up script tag
import serialize from 'serialize-javascript'

// single fn to render our app and return as string
// static router needs 'context' passed in as empty object
// replace <Routes /> inside staticRouter
// we have access both to our redux store as an argument
// and to our html template
// by the time the store gets into this fn it already has all of the initial state inside it, so already called all of those loadData fns, already processed all of the actions resulting from that, and put it into the store
// need to scrub state to avoid xss attacks
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )
  // return string
  // going to add a second script tag, not going to attempt to load up a js file on the server, but put down some literal js code directly into template.
  // take all the state out of our store
  // replace JSON.stringify with serialize
  // easy fix, just serialize the state
  return `
      <html>
        <head></head>
        <body>
          <div id="root">${content}</div>
          <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
          </script>
          <script src="bundle.js"></script>
        </body>
      </html>
    `
}
//  so, renderer.js is going to house a fn that will simply render our react app and return it as a string

// no longer need to assign to variable html, 'const html =' , but can just 'return' the string

// adding a script tag that has a source of bundle.js
// instructs browser to go and get bundle

// import Home from '../client/components/Home'

// export a single fn that will render our app and return it as a string, cut from index.js
// StaticRouter has required props: context
// pass in empty object

// const content = renderToString(<Home />)
// update to show static router with all our custom routes
