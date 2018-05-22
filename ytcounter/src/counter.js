import React from 'react'
import { connect } from 'react-redux'

function Counter (props) {
  console.log('render', props)
  return (
    <div>
      <h1>I am a counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>increment</button>
    </div>
  )
}
// return new objects on both these fns
function mapStateToProps (state) {
  console.log('mapStateToProps', state)
  return {
    count: state.count
  }
}
function mapDispatchToProps (dispatch) {
  return {
    onIncrementClick: () => {
      console.log('clicking')
      const action = { type: 'INCREMENT' }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

/*
Need
1. event handler for when we click on a button
2. the data, which is the count in props
When we click on the button, we create an action,
and then we are going to dispatch that action to
the store, and the store will run through it's reducer
and that's going to change the state and then update
the component.
Stage One
Need to import 'connect'
We need a fn, that will map anything from the state to props,
going to take the state, and return count, take the count from
state and put it in a property called count: count: state.count
that's what's going to be passed in as props in this component,
see above.
Then need to connect, use connect fn to connect mapStateToProps fn
to this fn. This wraps our component with one created by the
connect fn.
This creates a NEW component which hooks up mapStateToProps with
our component, then we export it. The Counter component is now
wrapped in something else.
Stage Two
Create the store
Now need to create and dispatch our own action (redux does first)
Need mapDispatchToProps, the dispatcher for redux
return a new objext, just like we did with props, onIncrementClick,
and pass in a fn, going to come in on the props and can then attach
it to the button.
Then need to create an action
Has property 'type' as will be used in the reducer to determine what
kind of action it is.
Then dispatch it.
Use switch statement:
*/
