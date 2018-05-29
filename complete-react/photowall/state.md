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
* We will pass that fn all the way down to the PhotoWall component as a prop
* Then from our PhotoWall component, we will pass that fn down to each photo that it has created
* And, for each photo we will link that fn to a remove button
* So, whenever we click the remove button, it's going to invoke the fn, and remove the specific photo
* Pass in function as props in Main, onRemovePhoto={this.removePhoto}
* Now, inside the PhotoWall component, we have to pass down the method to every single photo (that's being mapped over) as a prop.
* For every photo being generated, give it a prop
* Now can access this method in every single photo
* So when we click the remove button, we want to invoke the fn removePhoto passing in the proper photo as argument
* 
