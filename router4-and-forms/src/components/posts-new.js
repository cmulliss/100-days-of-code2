import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import { format } from 'path'

// dont have to wire it up manually, just pass
// the pre genreated event handlers via
//         <input {...field.input} />
class PostsNew extends Component {
  renderTitleField (field) {
    return (
      <div>
        <input type='text' {...field.input} />
      </div>
    )
  }

  render () {
    return (
      <form>
        <Field name='title' component={this.renderTitleField} />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew)
// our helper, that's going to allow reduxForm to
// communicate directly from the component
// to the reducers that we have already set up

// import 2 helpers, a react component, Field
// and a fn, reduxForm (similar to connect helper)
// allows our component to communicate with the
// additional reducer (formReducer) in combineReducers is // allowing our component to talk directly to the redux store
// one argument, name of form
//
