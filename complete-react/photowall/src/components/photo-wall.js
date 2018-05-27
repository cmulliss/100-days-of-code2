import React, { Component } from 'react'

import Photo from './photo'

class PhotoWall extends Component {
  render () {
    return (
      <div>
        {this.props.posts.map((post, index) => (
          <Photo key={index} post={post} />
        ))}
      </div>
    )
  }
}
export default PhotoWall

/*
The PhotoWall component, simply a container that will hold
many instances of the photo component
The PhotoWall component, inside main.js, will first pass in
the posts array as props, the passed in posts is = to the [] posts
which we can access in the components class definition in our render
method, as this.props.posts, we are going to map over the array .map,
the arguments post. Each post we are iterating through the array we
want to generate a new photo.
Create photo.js
Summary
PhotoWall component passes in an array of posts, this.props.posts
We are mapping through that array to render out 3 Photo component instances.
For every photo instance that is created, for each post that we are iterating through, we are passing in props of the post associated to the photo it
has just looped through.
Now these photo instances that we are generating from the array of posts, we
need to define how they will be displayed.
*/
