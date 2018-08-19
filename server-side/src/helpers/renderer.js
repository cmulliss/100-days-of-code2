import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes'

// single fn to render our app and return as string
// static router needs 'context' passed in as empty object
export default req => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  )
  // return string
  return `
      <html>
        <head></head>
        <body>
          <div id="root">${content}</div>
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
