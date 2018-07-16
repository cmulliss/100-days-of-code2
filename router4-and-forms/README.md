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
* 
