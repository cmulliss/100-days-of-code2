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
* going to create 2 bundles, one backend one for browser
* our server side bundle, and the code inside it is separate as may contain sensitive info or code
* make one version of bundle with all our server side and client side code
* and one version that contains only the client
* so, going to setup a second webpack pipeline that is going to run alongside our current one
* create a separate webpack config for this
* now have 2 entry points, src/client/client.js as root or entry point for our client side code base
* and src/index.js for our server side
* our webpack output, create a public directory for this as needs to be publically available
* need to put npm script to run this new webpack pipeline in package.json
* test with:   npm run dev:build:client
* now should see a new public directory with a client side bundle.js created for us
* now need to make sure that when we load up all of our content inside the browser, we instruct the browser to reach back to the server and download this client side bundle that was just created
* first open all our public directory files to outside world by telling express to treat public as a freely available public directory
* in index.js, immediately under where we declare our app object, add: app.use(express.static('public'))
* tells express that it needs to treat that public dir as static or public
* also need to tell the browser, after we generate all this html, that it needs to download the bundle.js that is now freely available in the public directory
* so after we generate our content we are going to generate a tiny html document that includes a script tag
* going to have some code that specifically boots up the server side, and some that specifically boots up client side
* special config for router and redux that we only want occuring on server, and some config for them that we only want executed on the client
* our initial render is done inside the index.js file on the server,then on the client side, on the browser, we are going to breathe life into the app on the browser, and that operation is going to be started from our client.js file.
* we are taking the html that exists on the page, and have react crawl all over it and set up any necessary event handlers, life cycle, anything that needs to occur
* saying, go back to the server, as soon as express sees a request for a bundle.js file, look into the static directory and respond with the new bundle.js file in there
* so not only serving up html from our server, but also attempting to load up a js bundle from it
* so, loading up js on the client side on the browser, but very importantly, html coming back and js bundle as afterthought
* now have option to reach back with this client side bundle and make sure all the things like our event handlers, or any other js we want to add will be executed too inside the browser

### Review

* on server, index.js has a lot of code to boot up the server
* in the client.js file we have a lot of code to start our app, entry point for our app specifically in the browser
* adding in react router and redux support will require separate special config
* makes these 2 files good place to do some platform specfic initialisation of react router and redux
* a preview: the order of operations that are going to occur when we load our app in the browser
* from the server, the rendered app sent to the users browser
* client bundle takes over the html generated on the server, like a skeleton
* booting for second time breathes life into skeleton
* we are getting react to restore all event handlers etc
* from point where rendered into same div, can treat like any normal react app
* the initial render is done inside index.js on the server
* then, on the client side on the browser we are going to breathe life into the app on the browser, operation started from client.js file
```javascript
* render(<Home />, document.querySelector('#root'))
```
* attempt to render Home component into DOM
* originally rendered our app once on the server
* want to make sure we render app into same div as the one on the server was rendered into, when code is executed on the browser side, there is already content in that div, rendered from server
* so when we call ReactDOM.render, we are not REPLACING the html inside there, we are telling react to go back through and set up all those event handlers, where all necessary code needs to be executed to bind to that existing structure on the page
* HYDRATION: the entire process of putting functionalily back into the DOM that was already rendered is referred to as hydration

### cleaning up files

* using webpack-merge for webpack config files
* move babel code into webpack.base.js, as a module that exports a new object 
* in both clien and server config, import both the webpack merge and the base config etc
* BUT, still have 3 commands to start our web server
* use another package, a module: npm-run-all, to run multiple scripts with one command
* create another script inside package.json

```json
"scripts": {
    "dev": "npm-run-all --parallel dev:*",
    "dev:server": "nodemon --watch build --exec \"node build/bundle.js\"npm-run-all",
    "dev:build-server": "webpack --config webpack.server.js --watch",
    "dev:build-client": "webpack --config webpack.client.js --watch"
  },
  ```
* now just run: npm run dev, to run execute all 3 scripts in parallel
