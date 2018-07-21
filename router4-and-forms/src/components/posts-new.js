import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import { format } from 'path'
import { runInThisContext } from 'vm'

// dont have to wire it up manually, just pass
// the pre genreated event handlers via
//         <input {...field.input} />
class PostsNew extends Component {
  renderField (field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input className='form-control' type='text' {...field.input} />
        {field.meta.error}
      </div>
    )
  }
  // to show error messages, reference the 'field' object
  // that is passed the renderField fn
  // field object represents a single input, or piece of
  // state we are attempting to communicate to the user
  // meta.error automatically added to that field object from our validate fn.

  // helper fn
  onSubmit (values) {
    console.log('values', values)
  }

  render () {
    const { handleSubmit } = this.props
    // bind makes sure we still have access to our component
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label='Title' name='title' component={this.renderField} />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}
  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters'
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories!'
  }
  if (!values.content) {
    errors.content = 'Enter some content please'
  }
  return errors
}
export default reduxForm({
  validate: validate,
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
// define a helper fn, going to take this and pass
// it to the redux-from helper as a configuration
// option called 'validate'
// single argument, by convention 'values'
// we have to return an object, that we create,
// from the validate fn
// always start by creating an errors object
// then some logic to validate the inputs from 'values'
// at bottom return the 'errors' object
// if errors empty, the form is fine to submit
// however, if object has any properties assigned to it
// redux form will assume that it is issue, does not
// validate, should not submit

// to submit, start by pulling a property off our props
// so, when we reference this.props and pull off this
// handleSubmit fn, this is a property that is being //passed to the component on behalf of redux-form
// as is doing equivalent of connect at bottom

// handleSubmit takes a fn, we define, and pass that to handleSubmit, which is going to run the redux-form side of things, validation etc
// then if valid etc, will go ahead and run the callback which is this.onSubmit
// so when the user submits the form, the redux side of things will run
// once it decides all ok, it then calls the fn we
// defined and passes us the values out of the form
// calling bind on this, because we are passing this.onSubmit as a callback fn, that will be executed in some different context outside our component
