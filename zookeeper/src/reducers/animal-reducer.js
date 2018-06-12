const animalReducer = () => {
  return [
    { species: 'ape', name: 'hans', gender: 'm', age: 23 },
    { species: 'tortoise', name: 'heide', gender: 'f', age: 89 },
    { species: 'cat', name: 'nini', gender: 'f', age: 13 },
    { species: 'shark', name: 'gert', gender: 'm', age: 4 },
    { species: 'parrot', name: 'lisa', gender: 'f', age: 17 }
  ]
}

export default animalReducer

/*
! We have a data structure in here, that is bound to the store, and the reducer is made use of in the stotre in the index.js
Everthing in App is now wrapped with a provider, the provider has this nice store for us, and the store keeps track of our state, so we have our combinedReducer, our root reducer and is where we import all our other reducers: in reducers/index.js
2. We map them to the state of the application, on the LHS of the key:value pair,
2. and on the RHS of the key value pair is where our reducer comes
 animals: animalReducer
3. Then in our component, AnimalsList, using the 'connect' method, and also the provider, we were able to access the 'global state' of the application
We mapped the state of the app, RHS, to the property of the component, LHS
in fn mapStateToProps
4. Then, in AnimalsList, had a render helper method, renderAnimalsList,
rendered the animals.

*/
