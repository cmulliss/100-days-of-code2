# State

* The main component is managing state, we added the array as a distinct piece of state of our component. 
* Updating our array will trigger updates to page (re-render DOM). 
* The PhotoWall accesses the updated array of state, passes it down as data and renders the updated photos.
* The UI is just a fn of state, when you change state, UI updates accordingly.
* The 'Remove' button is inside the Photo component, whereas the state is inside the Main component.
* The goal is we are going to have a method, inside Main, called removePhoto, and we are going to pass it into the Photo component.
* give argument: removePhoto(postRemoved)
* Going to use it to update our state, by removing that specific post out of our post array, trigger render method and update UI with new set of photos
* Inside Main, create fn respponsible for updating the state
* Pass that fn all the way down to the PhotoWall as a prop
* Then from our PhotoWall component, pass that fn down to each photo that's created
* And for each Photo we will link that fn to a 'remove' button
* For any Photo, clicking the remove button is going to invoke the fn to remove the photo and passes in the specific photo that we want to remove
* Pass our fn, as a prop, down to our PhotoWall, just like we're passing in posts as a prop to PhotoWall
* Then inside the PhotoWall component we have to pass down the method to every single Photo that's been mapped over, once again as a prop to every single photo that's being generated, give it a prop, onRemovePhoto, equal to props.onRemovePhoto
* How will we get our button, all the way over here in the Photo components, to invoke some kind of fn to update our state?
* End goal, we are going to have a method inside our Main component class, called removePhoto, and are somehow going to pass it into the photo components, the post in which we press the remove button by and on.
* Going to give it an argument of postRemoved, that post we pressed the remove button on, we are going to use it to update our state by removing that specific post out of our post array, which will trigger the render method and update our UI with a new array of posts. An array which does not include the deleted photo.
* Our only goal is to invoke this method, such that it takes as an argument, the photo that we chose to remove, the post.

## How we are doing this

* Inside of the Main component, where our state lives, we create a fn that's going to be responsible for updating the state

```javascript
removePhoto(postRemoved) {
    console.log(postRemoved.description); }
```

* We will pass that fn all the way down to the PhotoWall component as a prop
* Then from our PhotoWall component, we will pass that fn down to each photo that it has created
* And, for each photo we will link that fn to a remove button
* So, whenever we click the remove button, it's going to invoke the fn, and remove the specific photo
* Pass in function as props in Main, onRemovePhoto

```javascript
<Title title={"PhotoWall"} />
        <PhotoWall posts={this.state.posts}
        onRemovePhoto={this.removePhoto} />
```

* Now, inside the PhotoWall component, we have to pass down the method to every single photo (that's being mapped over) once again, as a prop.
* For every photo being generated, give it a prop, onRemovePhoto equal to props.onRemovePhoto

```javascript
<Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
```

* Now can access this method in every single photo
* So when we click the remove button, we want to invoke the fn removePhoto passing in the proper photo as argument
* We are passing in the method from Main.js to the PhotoWall, 
* and from PhotoWall we are accessing this method, such that in turn, we are passing it to every single photo that's being mapped over
* Now can access this method in every single photo, such that when we click the remove button 
* In Photo.js, using 'onClick', when we click the remove button, we are setting the onClick handler method to an arrow fn.

```javascript
iv className='button-container'>
        <button className='remove-button' onClick = {() => {
            props.onRemovePhoto(post)
```
* Whenever we click the remove button it will invoke this => fn
* so by calling props.onRemovePhoto, we are basically calling this method that was passed all the way down to it as a prop of onRemovePhoto, 
* and it's going to call this method such that it passes in a prop of post
*  props.onRemovePhoto(post)
* and it should therefore console.log the photo description in which we clicked remove
* We are able to access the photo whenever we press 'remove'
* Now the photo we just clicked, we want to use it to update the state of our component such that we are removing it from the array of posts and by updating this state it will re-trigger the render method
* To update the state of the component, in Main.js, add this.setState, and inside this pass in a fn, and that fn is going to return a brand new object which is going to serve as our updated state. 
* The first argument is the current state of our component, 'state'
* We want to update this current state so it removes one of the photos, the one clicked on
* To do this, return a new list of posts, get current state and filter out photo we just passed in
* filter takes any fn that loops through every single post and specify return value updating the post array such that we want all the posts that don't equal the removed post

```javascript
 removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState(state => ({
      posts: state.posts.filter(post => post !== postRemoved)
    })) }
```
* Thus we are filtering out the removed post from the array and returning the updated state of the posts property

### Binding

* error: this.setState is not a function
* inside of our removePhoto method, this context is not defined
* 'this' inside of the render method is ok, it points to the component instance that is being rendered to the DOM
* 'this' works fine in the constructor too
* however, 'this' inside removePhoto points to null, it's not bound to our component, we cannot use any of its methods, the binding in our removePhoto method is broken
* How do we update the components state if not able to reference the component instance, to which I need to update the state?
* The problem is because this is part of an event handler ...

```javascript
 removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState(state => ({
      posts: state.posts.filter(post => post !== postRemoved)
    })) }
```
* ... we have lost the 'this' bindings such that it's now in the context of a fn, NOT our component, and naturally, the context of a fn is null by default
* How do we restore the context of 'this'?
* Inside our constructor we will modify our method, removePhoto:

```javascript
removePhoto = this.removePhoto.bind(this);
```

## Summary

* access the removePhoto method (above) inside of every Photo component.
* We passed the method to our PhotoWall as a prop, 
* and from the PhotoWall we passed it down to every single photo
* and that same fn, we made it the event handler of every single 'remove' button for every single photo
* so whenever we click the 'remove' button of one of these photos, it will trigger the onClick handler and call the fn removePhoto, passing in its post as an argument, 
* and that post itself that we clicked, using it to update the state of the component by filtering it out from the post array of the current state
* thereby updating the state wit a new posts array that doesn't include the removed photo
* Removing a photo, it would get filtered from the post array, updating the state and the post property of our state would then only have 2 photos
* the Main component is notified that state just updated, so re-run the UI
* so it re-invokes render so we are passing in a filtered array of our updated state to the PhotoWall

## Prop Types

* install prop-types
* import PropTypes
* In PhotoWall
```javascript
<div className='photoGrid'>
      {props.posts.map((post, index) => (
        <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  )
}
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}
```
* In Photo
```javascript
Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}
```

## Lifeccylc methods

* Before the component is inserted into the DOM, the constructor is invokes and initialises the component state with a post property of an empty array
* The render method would then get caught passing in an empty array to map out the photos
* use componentDidMount
* Ajax requests, or any asynchronous API requests should be performed AFTER teh component is mounted, after its inserted into the DOM and added to the view
* Whenever fetching data from a database, make sure it's inside __componentDidMount__
* Do not make the mistake of placing your request inside __componentWillMount__
* __componentDidUpdate__ updates state and triggers a re-render

## Routing and SPA

* What is a single page App?
* when you visit an SPA the browser downloads the entire contents all at once, in a single request
* By doing so, whatever the user navigates between different pages of our app, the browser already has access to all your content of your next page
* No need to grab from server and refresh our pitch
* More efficient
* resource for tutorial
* url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

### Routing
* Browser Router: keeps track of URL changes
* Link: invokes change in URL on click
* Routes: contain a given path
* Use 'component' for one and 'render' for more than one 