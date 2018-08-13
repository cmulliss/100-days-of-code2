# Misc

## In index.js

In App.js, want to pass a prop of showPassword and set that = to this.state.showPassword, and in the passwordInput we can interpolate a fn and have access to props as an argument within that fn. This is the same for the attrs helper, but dont need to interpolate a fn, can set type = to a fn that returns a value within that fn.

## Button

interpolate a fn,
and have access to props within backticks

if props primary exists, if primary has been
passed in as prop to the button component,
render some more css

the backticks are 'tagged template literals'
a new es6 feature, actually a function call
so, button is a fn, calling it with backticks
allows us to identify any interpolated fns, or
any interpolated properties, could be a string,
within the fn call

styled components generate a style sheet for us, create classes and attach them as classnames to DOM nodes and then injects the stylesheet at the end of the head tag at runtime, in public/index.html

## Password input

adding props or attriburtes to style components
want to create a common password input component
will consist of rendering an html input element with a type attribute set to password
using attrs, a chainable method, before applying css
attrs takes object with any attributes we want to set for this input element
any attribues will be merged in with any props you might add to the styled component while rendering it.
can dynamically change these attrs
toggling between a text input and a password input

In App.js, want to pass a prop of showPassword and set that = to this.state.showPassword, and in the passwordInput we can interpolate a fn and have access to props as an argument within that fn. This is the same for the attrs helper, but dont need to interpolate a fn, can set type = to a fn that returns a value within that fn.

## Styling existing react components

* Usually, 3rd party libraries such as reactstrap
* npm install --save bootstrap reactstrap
* then install bootstrap to get the css too
* import into index.js
* import 'bootstrap/dist/css/bootstrap.min.css'
* then import the button from reactstrap into App.js
* import { Button } from 'reactstrap'

## Extending styles

* generally one time useage, to override a few styles
* eg, login form where we have a couple of different 3rd party logins
* example using LoginWithFacebookButton

## Inject global helper

* (contraversial) limit to one file
* use only once in main index.js file to set some generic styles, body element, eg, font style set from google fonts, or removing margins added by the browser or adding padding etc
* import { injectGlobal } from 'styled-components'
* get code for google font and add to index.html, in head

```javascript
<link href="https://fonts.googleapis.com/css?family=Gaegu" rel="stylesheet">
``` 

* then in index.js again, add the css, with !important

```javascript
injectGlobal`
body { 
    font-family: 'Gaegu', cursive !important;
}
`
```

## Animation with key frames and key frames helper

* loadin