import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../client/components/Home'

export default () => {
  const content = renderToString(<Home />)

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
// no longer need to assign to variable html, 'const html =' , but can just 'return' the string

// adding a script tag that has a source of bundle.js
// instructs browser to go and get bundle

// import Home from '../client/components/Home'

// export a single fn that will render our app and return it as a string, cut from index.js
// StaticRouter has required props: context
// pass in empty object
