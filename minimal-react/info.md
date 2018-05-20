# React Redux tutorial: 
## what problem does Redux solve?
* Now, it is fine to keep the state within a React component as long as the application remains small.
* But things could become tricky in more complex scenarios.
* You will end up with a bloated component filled with methods for managing and updating the state. The frontend shouldn’t know about the business logic.
* Redux solves a problem that might not be clear in the beginning: it helps giving each React component the exact piece of state it needs.
* Redux holds up the state within a single location.
* Also with Redux the logic for fetching and managing the state lives outside React.

## Getting to know the Redux store
* Actions. Reducers. I kind of knew about them. But one thing wasn’t clear to me: how were all the moving parts glued together?
* The store orchestrates all the moving parts in Redux. 
* The store in Redux is like the human brain: it’s kind of magic.
* The Redux store is fundamental: the state of the whole application lives inside the store.
* So to start playing with Redux we should create a store for wrapping up the state.
* __createStore__ is the function for creating the Redux store.
* createStore takes a reducer as the first argument, __rootReducer__ in our case.
```javascript
// src/js/store/index.js
import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
export default store;
```
* You may also pass an initial state to createStore. But most of the times you don’t have to. Passing an initial state is useful for server side rendering. Anyway, __the state comes from reducers.__
* In Redux reducers produce the state. The state is not something you create by hand.
## Reducers
* In Redux __the state must return entirely from reducers.__
* __A reducer is just a Javascript function__. A reducer __takes two parameters: the current state__ and an __action__.
* The third principle of Redux says that the state is immutable and cannot change in place.
* This is why the reducer must be pure. A pure function is one that returns the exact same output for the given input
* In plain React the local state changes in place with setState. In Redux you cannot do that.
* Creating a reducer is not that hard. It’s a plain Javascript function with two parameters.
* In our example we’ll be creating a __simple reducer taking the initial state__ as the first parameter. As a __second parameter__ we’ll provide __action__. As of now the reducer will do nothing than returning the initial state.
```javascript
// src/js/reducers/index.js
const initialState = {
  articles: []
};
export default rootReducer;
const rootReducer = (state = initialState, action) => state;
```
* Notice how the initial state is passed as a __default parameter__.
## Actions
* Redux reducers are without doubt the most important concept in Redux. __Reducers produce the state of the application.__
* But __how does a reducer know when to produce the next state?__
* The second principle of Redux says the __only way to change the state is by sending a signal to the store__.This signal is an __action__. __“Dispatching an action”__ is the process of sending out a signal.
* Now, how do you change an immutable state? You won’t. __The resulting state is a copy of the current state plus the new data__.
* __Redux actions are nothing more than Javascript objects.__
```javascript
{
  type: 'ADD_ARTICLE',
  payload: { name: 'React Redux Tutorial', id: 1 }
}
```
* Every action needs a type property for describing how the state should change.
* You can specify a payload as well. In the above example the payload is a new article. A reducer will add the article to the current state later.
* It is a best practice to __wrap every action within a function__. Such function is an __action creator__.
* Let’s put everything together by creating a simple Redux action.
```javascript
// src/js/actions/index.js

export const addArticle = article => ({ type: "ADD_ARTICLE", payload: article });
```
* So, the __type property__ is nothing more than a string.
* The reducer will use that string to determine how to calculate the next state.
* Since strings are prone to typos and duplicates it’s __better to have action types declared as constants__.

This approach helps __avoiding errors that will be difficult to debug__.
```javascript
// src/js/constants/action-types.js

export const ADD_ARTICLE = "ADD_ARTICLE";
```
* Now open up again src/js/actions/index.jsand update the action to use action types:
```javascript
// src/js/actions/index.js
import { ADD_ARTICLE } from "../constants/action-types";
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
```
## Refactoring the reducer

### Before moving forward let’s recap the main Redux concepts:
* the _Redux store__ is like a brain: it’s in charge for __orchestrating all the moving parts__ in Redux
* the __state of the application lives as a single, immutable object__ within the store
* as soon as __the store receives an action it triggers a reducer__
* the __reducer returns the next state__
#### What’s a Redux reducer made of?
* A reducer is a Javascript function taking __two parameters:__ the __state__ and the __action__
* A reducer function has a __switch statement__
* The __reducer calculates the next state depending on the action type__. Moreover, __it should return at least the initial state when no action type matches__.
* When the action type matches a case clause __the reducer calculates the next state__ and __returns a new object__. 
```javascript
// ...
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
```
* The reducer we created in the previous section does nothing than returning the initial state. Let’s fix that.
```javascript
import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      state.articles.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
```
* Although it’s valid code the __above reducer breaks__ the main Redux principle: __immutability__.
* Array.prototype.push is an impure function: it alters the original array.
* Making our reducer compliant is easy. Using __Array.prototype.concat__ in place of Array.prototype.push is enough to keep the initial array immutable:
```javascript
import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: state.articles.concat(action.payload) };
    default:
      return state;
  }
};

export default rootReducer;
```
* We’re not done yet! With the spread operator we can make our reducer even better:
```javascript
import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
```
* In the example above the initial state is left utterly untouched.
* The initial articles array doesn’t change in place.
* The initial state object doesn’t change as well. 
* The resulting state is a copy of the initial state.

### There are two key points for __avoiding mutations in Redux:__

1. Using concat(), slice(), and …spread for arrays
2. Using Object.assign() and …spread for objects
* The object spread operator is still in stage 3. Install Object rest spread transform to __avoid a SyntaxError Unexpected token__ when using the object spread operator in Babel:
* __npm i --save-dev babel-plugin-transform-object-rest-spread__
* Open up .babelrc and update the configuration:
```json
{
    "presets": ["env", "react"],
    "plugins": ["transform-object-rest-spread"]
}
```
* __Redux protip:__ the reducer will grow as your app will become bigger. You can split a big reducer into separate functions and combine them with combineReducers

## Redux store methods
* Redux itself is a small library (2KB). The Redux store exposes a simple API for managing the state. The most important methods are:

1. getState for accessing the current state of the application
2. dispatch for dispatching an action
3. subscribe for listening on state changes
* We will play in the brower’s console with the above methods.
* To do so we have to export as global variables the store and the action we created earlier.
head over http://localhost:8080/ and open up the console.

* Since we’ve exported the store as a global variable we can access its methods. Give it a try!
* Start off by accessing the current state:

store.getState()
output:

{articles: Array(0)}
Zero articles. In fact we haven’t update the initial state yet.

To make things interesting we can listen for state updates with subscribe.

The subscribe method accepts a callback that will fire whenever an action is dispatched. Dispatching an action means notifying the store that we want to change the state.

Register the callback with:

store.subscribe(() => console.log('Look ma, Redux!!'))
To change the state in Redux we need to dispatch an action. To dispatch an action you have to call the dispatch method.

We have one action at our disposal: addArticle for adding a new item to the state.

Let’s dispatch the action with:

store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) )
Right after running the above code you should see:

Look ma, Redux!!
To verify that the state changed run again:

store.getState()
The output should be:

{articles: Array(1)}
And that’s it. This is Redux in its simplest form.

Was that difficult?

Take your time to explore these three Redux methods as an exercise. Play with them from the console:

1. getState for accessing the current state of the application
2. dispatch for dispatching an action3.  subscribe for listening on state changes
* That’s everything you need to know for getting started with Redux.

## Connecting React with Redux
* After learning Redux I realized it wasn’t so complex.
1. I knew how to access the current state with getState.
2. I knew how to dispatch an action with dispatch
3. I knew how to listen for state changes with subscribe
* Yet I didn’t know how to couple React and Redux together.
* For React there is react-redux.
* npm i react-redux --save-dev
* Simple App, made of the following components:
1. an App component
2. a List component for displaying articles
3. a Form component for adding new articles
* __react-redux__ is a Redux binding for React. It’s a small library for connecting Redux and React in an efficient way.
* The most important method you’ll work with is __connect__
* it connects a React component with the Redux store.
* You will use connect with two or three arguments depending on the use case. The fundamental things to know are:
1. the mapStateToProps function
2. the mapDispatchToProps function
* mapStateToProps does exactly what its name suggests: __it connects a part of the Redux state__ to the __props of a React component__. By doing so a connected React component will have access to the exact part of the store it needs.
* mapDispatchToProps does something similar, but for actions. __mapDispatchToProps connects Redux actions to React props__. This way a connected React component will be able to dispatch actions.
## App component and Redux store
* To start off connecting Redux with React we’re going to use Provider.
* Provider is an high order component coming from react-redux.
* Provider wraps up your React application and makes it aware of the entire Redux’s store.
* Why so? We saw that in Redux __the store manages everything__. React must talk to the store for accessing the state and dispatching actions.
*  Provider wraps up your entire React application. Moreover it gets the store as a prop.
```javascript
render(
  <Provider store={store}>
    <App />
  </Provider>,
  ```
  

