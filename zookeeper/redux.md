# Redux zookeeper app

* we need to bring the state of the app to the props on the component
* using redux connect method
* We started with the concept of actions, and what we wanted to do in our container, we wanted to click an element, and after that we wanted to pass a single animal with its data
* In container, bring in action creators (bindActionCreators) and started with connect method, allowd us to map state and dispatch to props, we could dispatch actions and bind them to the props
* to do this we imported the selectAnimal action, and we bound it to the props 
* So, not only could we bind the state of the app to the props of the component, but we could also dispatch actions, or apply actions to the props of the component and to do so we needed to enhance the connect method 
* export default connect(mapStateToProps, mapDispatchToProps)(AnimalList)
* after we have bound the action, via the connect method to the component, we needed to write the action and import it by name

```javascript
function mapDispatchToProps (dispatch) {
  return bindActionCreators(
      // imported action on R, binding it to L, the name you are calling it on props
    { selectAnimal: selectAnAnimal}, dispatch
  )}
```

* Payload is the animal we passed from our animalsList
* The reducer is taking the action and iterating over the action type

```javascript
export default function (state = null, action) {
  switch (action.type) {
    case 'ANIMAL_CLICKED':
      console.log(action)
  }
  return state
}
```
* In our reducer, we are returning the action payload (the state)
* 