# Postman
* set to raw and json

* select POST

* http://reduxblog.herokuapp.com/api/posts?key=something

```json
{
	"title": "hey bb",
	"categories": "asdf",
	"content": "new content"
}
```
* http://reduxblog.herokuapp.com/api/posts/postid?key=something
* creating a new post gives output plus id
* can use id to view or delete that post
* can view all posts too

## React Router 4
* For v4 of React Router use:
* npm install --save react-router-dom@4.2.2

* install axios and redux promise
* sudo npm install --save axios redux-promise
* in the main index.js import Promise
* and pass it into the applyMiddleware call
* const createStoreWithMiddleware = applyMiddleware(promise)(createStore)
* import axios library into action creator

### what's going on in action creator?
* We are making the axios request
* we assign it to the variable 'request'
* we assign the request to the payload property of the action we are returning,
* because the request is being assigned to the payload property, the redux-promise middleware will automatically resolve this request for us whenever it sees this action
* so, by the time this action arrives in the reducer, the payload property will contain the response object from axios which will have our array of posts

### in the reducer next
* we put together our action creator to fetch a list of posts from our API
* probably don't already have any posts stored on the API
* making request now, expect to see empty array come back
* our reducer is going to produce the 'post' piece of state
* the goal inside the reducer is to return an object that contains the id of every post, as the key, and the value will be the actual post iself
* Can use the __lodash__ library:
1. will take an array of records
2. take one property out of each record
3. and create an object out of that

### wire up action creator to component

* now have got our FETCH_POSTS action creator put together
* and have got out reducer hooked up to it, for the FETCH_POSTS action, need to:
* wire up FETCH_POSTS action creator to the posts-index.js component
* so import our action creator and the connect helper
* wire up connect helper at the bottom
* previously, have made use of the connect helper by defining the mapDispatchToProps function
* have done this whenever we wanted to get an action creator directly into a component, 
* so we can call it off the props object

### there is another way to wire up the action creator

* more of a shortcut
* so rather than defining a separate function, 
* for defining exactly how the action creator is going to be hooked up
* we are first going to define our mapStateToProps argument of null,
* because we are not passing mapStateToProps
* the second argument, rather than passing in that extra function, we are just going to pass in the action creator itself, inside of an object

```javascript
export default connect(  null, { fetchPosts: fetchPosts }
)(PostsIndex)
```
* we still have access to this.props.fetchPosts inside of the component
* (there are times when you would want to use a separate function, eg if you want to do some computation on exactly how you want to call the action creator ahead of time)

### when are we going to call the action creator?

* when are we going to attempt to reach out to the API and fetch our list of posts?
* previously, we have fetched data after an event occurs, hover or click for example
* in this case, telling component to go fetch some data as soon as it is about to be rendered
* as soon as is about to be rendered on screen, we want to reach out to our API and fetch this list of posts, by calling the action creator
* will use a lifecycle method to do this, componentDidMount
* doesn't make much difference calling the action creator
* before or after compoent renders on screen
* because fetching our data is an asynchonous operation
* it takes time to fetch some data and have it returned to our browser, and react does not have any concept of figuring out how to not render the component until after we do some pre-loading operation
* react will always try to load itself as soon as it can
* can see request on 'network' tab
* testing in Postman:
http://reduxblog.herokuapp.com/api/posts/?key=PAPERCLIP1234
    {
    "id": 259116,
    "title": "hey bb",
    "categories": "asdf",
    "content": "new content"
}
* last thing we need to do is go back to component
* hook that component up to component level state
* or some app level state 
* and render our list of posts inside the browser

## Redux Form

* npm i --save redux-form
* we then have to import a reducer from the redux-form library and hook it up to our combineReducers call
* so, internally, redux-form uses our redux instance, or our instance of the redux store for handling all the state that is being produced by the form, like the actual form that is getting rendered on the screen
* redux-form is saving us from having to wire up a bunch of manual action creators
* 
### Summary
* in index.js made use of Route etc to give our app the aspect of the idea of navigation
* we created separate routes for each individual component inside our app, and we tied each of those component to a particular path
* just hiding and showing different sets of react components
* the route component takes a path, and that path can have wildcards in it, that we specified :id
* made good use of this inside posts-show
* const id = this.props.match.params
* challenge, making use of react-router with action creators
* best way, passing around callbacks to our action creators, that will take care of the navigation after the action creator has completed executing
* made use of 'ownProps' system, with mapStateToProps
* remember, the second argument with mapStateToProps is the set of props going to the target component
* good place to do intermediate calculations etc
* also see 'reselect' library for doing intermediate calculations inside of mapStateToProps
* __finally, inside our reducer, we made use of _.mapKeys helper to treat our state object as an object rather than an array__
* with an object we get some very fast and easy look up of records and it also makes maintaining fetching the same record repeatedly much more straightforward
* we were fetching an individual post, with the FETCH_POSTS case, easy to take all of our existing states adn then add in additional record to that object as well
* return { ...state, [action.payload.data.id]:
* easier than using an array, because this way a particular post just overwritten
* __use an object for storage of your data in your state__
* see bonus video

