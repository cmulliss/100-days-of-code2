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

### Optimisation

#### Ignoring files with webpack

* change to dramatically improve the start up time of our server webpack process, also gives more insight into exactly how webpack and the js module systems work
* on the browser, want webpack to copy the entire libray into bundle.js, goal for webpack to condense down all of our assets into one single file
* on the server, where running the index.js, it's different, our server bundle is importing entire source code of express, react and react-dom. so, when webpack runs for our server process it copies the entire source code of all 3 into output bundle.js file. 
* This is not actually required, because with node, unlike the browser, we can require node modules at RUNTIME when our server first starts up.
* If we reduce the number of libraries that need to be placed in that file, we'll end up with a faster well-packed process, particularly during the initial start up webpack run.
* how to prevent webpack importing our libraries into our server bundle?

### webpack-node-externals

* to make use of it, open webpack.server.js config file
* import webpack-node-externals
* add another option to config file, and call like fn: 
* externals: [webpackNodeExternals()]
* tells webpack to not bundle any libraries into our output bundle on the server, if that library exists inside the node modules folder

#### Another refactor to server side codebase: renderer.js

* seems small, but will make a difference when adding in react router, redux etc
* we seem to be locating all our server side rendering logic in our index.js file
* ok for now, but later expect route handler in file to get very large, so to prevent this file from getting too large, want to split out the logic that renders our react app to a separate file
* so, create a helpers directory in src, and renderers.js
* this file will house a fn, that will simply render our react app and return it as a string
* cut 'content' from index.js and add to render as fn
* then clean up imports in index.js, and import renderer.js
* so now whenever a request comes in, 
* we call the renderer fn, that goes into our render fn in renderer.js, 
* we attempt to render our Home component to a string, 
* stick it into our html template and then return the entire thing.
* the result gets sent back to whoever make this initial request
* helps separate out the express related logic from the actual server side rendering and react logic. 
* we are going to locate all this inside this renderer.js
* so, renderer.js is going to house a fn that will simply render our react app and return it as a string
* NB __now using npm run dev__

## React Router support

* currently only shows root route
* express is not going to enforce any routing rules on any incoming requests
* express is going to delegate 100% routing inside app to react router, pass on requests involving html
* react router decides what appears on screen
* BrowserRouter component 100% hardcoded to look at url in address bar of browser, PROBLEM, because when we render our app on the server we do not have an address bar
* to solve this, using 2 different routers:
1. Server: Static router, for ssr
2. Client: Browser router, for use when running web browser, when rendered for 2nd time, __hydrated__
* create Routes.js, import into both, one distinct set of route mappings
* first edit renderer.js, remove Home import as the Home component is now being rendered by the Routes component
* instead import StaticRouter and Routes component
* then update renderToString, to show static router, with inside it, all our static routes
* static router needs 'context' passed in as empty object
* empty object needs2 sets {{}}
* the outer set is to indicate we are about to pass a plain js variable
* the inner set is the actual empty object
* the static router need to be told exactly what the current path is (as unable to look at browser unlike browser router)
* we need to communicate the current path the user is trying to access to the static router
* so it knows what set of components to show on screen
* in the index.js file we have a route handler, with a request object which contains the url which the user is trying to access
* app.get('*', (req, res) => {
* going to take the request object and pass it as an argument to the render fn
*   res.send(renderer(req))
* then inside renderer.js, we can receive that as req
* export default (req) => {
* also needs property 'location' so this is the actual path it will use to look at all the different routes it has loaded into it and decide what to show on the screen
* the actual true url that we need to use here is a property on the request object which is req.path
* test by adding test route to Routes.js
* <Route path='/hi' component={() => 'Hi'} />
* but currently only have one route handler set up inside express
* so when the express routing tier gets some incoming request, and express is only recognising requests to '/', the root route of our app, need to tell express to look for any route, in index.js route handler:

```javascript
app.use(express.static('public'))
app.get('*', (req, res) => {
    res.send(renderer(req))
```

* then passes it on to react router and lets it deal with it
* express is always going to pass incoming requests to our renderer, which is going to pass the request on to react router, and allow that to decide what to do with it

## Simple express server with API

* https://react-ssr-api.herokuapp.com/

## Redux

* redux will be in charge of all the data managment of our app
* add boilerplate and can then make requests of the API
* 4 big challenges:

1. redux needs different config on browser vs server, the way it behaves on the server significantly differnet to the way it behaves in the client. Needs to do this to solve other 3 items.
* going to create 2 different stores, one for browser bundle and one store for the server bundle

2. aspects of authentication needs to be handled on server, normally this is only on the browser. Easy client side with cookie based Oauth, but we dont have easy access to the cookie data that proves the user is authenticated. Need a solution for this.

3. __Biggest challenge:__ Need some way to detect when all initial data load action creators are completed on server. In a normal redux app, running in the browser, whenever we want to load up some data we call an action creator, that then makes an ajax request and then wwhen that request resolves we dispatch an action and the app updates.
* NB, after all reducers run, redux collects all the new state and re-arranges the app automatically. So when we simply call an action creator and and the update occurs automatically, and we dont know when the action creators have finished fetching data. On the server, however we need to know the exact instant that the request issued by the action creator is finished, so we can attempt to render the app to a string and send it back down to the browser.

4. Need state hydaration on browser. 

### Challenge 1

* creating 2 stores with redux, one inside our render file and one inside our client.js file.

### create new store to use on client side

* reducers, initial state which is an empty object, then hook up the applyMiddleware call and pass in the redux thunk library
* then take this store and put into a provider, which will wrap our entire react app. Pass in store as prop to provider
* provider now has a reference to the redux store, any time the store changes, that provider will alert any connected components that they need to re-render.

### create server side store

* rather than creating redux store directly inside the renderer.js file, create a second helper file for this, createStore.js
* not going to import provider into creatStore.js because sole purpose is to create the redux store
* whereas client side we wanted to both create the redux store and immediately use it inside the redux app
* server side about creating the store and working with it before we attempt to render our app
* so not going to create store inside our renderer, but instead inside our route handler, index.js file
* then after we have done all of our store initialisation, all the data loading inside of it, then we will pass the store off the renderer, where it can then be used by the provider ```* *

```
