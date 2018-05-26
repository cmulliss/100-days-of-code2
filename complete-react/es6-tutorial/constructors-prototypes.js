// use classes to declare new objects
// name and age as properties
// we are creating an object with an es6 constructor

class Person {
  constructor (name, age, children) {
    this.name = name
    this.age = age
    this.children = children
  }
  // to add a prototype method, give constructor a method 'speak'
  // whenever we create an object from this constructor, that
  // object also inherits the method.
  speak () {
    console.log(`Hi, my name is ${this.name}`)
  }
  hobby () {
    console.log('fishing')
  }
  // return is optional
  // in this constructor we are going to have a method 'birth'
  // which takes an argument of child
  // this method will be inherited by our motley object
  // and whenever motley calls the method, we want to update
  // the children array, append new child with push
  birth (child) {
    this.children.push(child)
    return this.children
  }
}
// new Person with properties name and age
// we have created a 'children' array property for our
// object motley, such that it has values pingu and pongu
const motley = new Person('Motley', 12, ['pingu', 'pongu'])
motley.speak()
motley.hobby()
motley.birth('chick')
console.log(motley)
console.log(motley.children)
