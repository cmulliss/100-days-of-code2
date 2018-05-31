import React from 'react'
import PropTypes from 'prop-types'

const Photo = props => {
  const post = props.post
  return (
    <figure className='figure'>
      <img className='photo' src={post.imageLink} alt={post.description} />
      <figurecaption>
        <p>{post.description}</p>
      </figurecaption>
      <div className='button-container'>
        <button
          className='remove-button'
          onClick={() => {
            props.onRemovePhoto(post)
          }}
        >
          Remove
        </button>
      </div>
    </figure>
  )
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default Photo

/*
Don't need to worry about the context in which the fn is being invoked as there is no 'this' keyword.

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

Inside main.js we are creating a PhotoWall instance, which passes in an array of data, an array of posts, that array of posts is mapped out to render up 3 photo instances. Each photo instance has a figure.
*/
