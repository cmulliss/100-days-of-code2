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

