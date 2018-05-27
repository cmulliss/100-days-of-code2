import React, { Component } from 'react'

class Photo extends Component {
  render () {
    const post this.props.post
    return <figure>x</figure>
  }
}

export default Photo

/*
For each post we are looping through, we are interating through,
we want to create a new instance of the photo component and
thereby render an array of photos from this array of objects.
For each post we loop through we are going to return a photo
component instance. ASa result we are generating an array of photo
component instances and rendering it in every single photo instance.
For every single photo instance that we create, we have to pass in
the post associated with that photo as props.
By passing every post as props, we can now access each one in the
class definition.
const post = this.props.post
'this' refering to the component instance that is passing in the props
*/
