import React from 'react'

import Photo from './photo'

function PhotoWall (props) {
  return (
    <div className='photoGrid'>
      {props.posts.map((post, index) => (
        <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  )
}
export default PhotoWall

/*
Refactoring the above from a class based component, to a functional component, props as argument and don't need 'this' keyword' as
The PhotoWall component, simply a container that will hold
many instances of the photo component.
Passing in the array a 'props', then mapping over it etc.

The PhotoWall component, inside main.js, will first pass in
the posts array as props, the passed in posts is = to the [] posts
which we can access in the components class definition in our render
method, as this.props.posts, we are going to map over the array .map,
the arguments post. Each post we are iterating through the array we
want to generate a new photo.
Create photo.js
Summary
PhotoWall component instance passes in an array of posts, this.props.posts
We are mapping through that array to render out 3 Photo component instances.
For every photo instance that is created, for each post that we are iterating through, we are passing in props of the post associated to the photo it has just looped through.
Now these photo instances that we are generating from the array of posts, we need to define how they will be displayed. (In their class definiton)
*/
