# Server Side Rendering

* start with package.json, the npm install will install all those dependencies
* add new script to package.json

```json
"scripts": {
    "dev:build:server": "webpack --config webpack.server.js"
  },
```

## Manually

* see if script builds our bundle file:
* npm run dev:build:server
* when we run webpack it creates new directory, build, with file bundle.js, which can safely be executed by node as all jsx transpiled by babel down to es5:
* node build/bundle.js
* we have taken our home component, turned it into a string and sent string down to users browser
* so far having to do this manually

## Automaticaly rerunning webpack then restarting server

* add --watch to script in package.json
* use __nodemon__ to automatically restart node server whenever a watched file changes, 
* ie ONLY whenever webpack puts a new bundle inside the build directory
* now one command to run webpack, one to run server

```json
  "scripts": {
    "dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
    "dev:build:server": "webpack --config webpack.server.js --watch"
  },
  ```

* in one terminal window: npm run dev:server
* in a second run: npm run dev:build:server
* making changes to Home.js rebuilds and restarts

## Universal or Isomorphic js

* we are using 2 different module systems in our project
* index.js using common js module system, with require statements
* Home.js using es2015 modules, distinctly different module system
* working with isomorphich or universal (server side) app means we should be able to use exact same coding style on both client and server side
* BUT, currently no es2015 module support with node
* Babel and webpack can cope with this
* because our server files are being handled by webpack, we can now make use of es2015 modules on our server side code as well
* we want to do that to lessen the distinction between our server side code and client side code
* we want to write the exact same dialect of js on both sides
* so, refactor index.js

## Client side js

* our server side rendering pretty good, but one aspect not working as might be expected
* when someone accesses our server on the root route, we send them back the html that is generated from the Home component

```javascript
pp.get('/', (req, res) => {
  const content = renderToString(<Home />)
```

* so a slight problem with our server, if add more code to Home component will expose this
* add button and event handler, no response on clicking button
* normal React app, takes bundle.js, renders components to DOM, attaches event handler
* but server side app, no js code being sent down to the users browser right now. Make request to root route, express server sends back the html from the Home component, and NOTHING else, no js
* to get app to work, we need to ship down all the js code related to our app, after we ship down all the html which gives some initial content on the screen
* step one, getting html on screen
* step two, is to make sure we then load up our react app and have the react app set up all the event handlers, action creators and data loading requests etc
* 


