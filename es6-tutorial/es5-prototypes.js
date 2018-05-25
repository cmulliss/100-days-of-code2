// an object is a collection of properties associated with a variable
// const person, properties, name, age etc
// the goal is to create an object using a fn construtor

// to start this we are going to create a constructor fn
// and declare name and age parameters inside the fn
// going to use this constructor fn to create a new object of person
// will have values of whatever name and age were passed into it

function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.speak = function () {
  console.log(`Hi, my name is ${this.name}`)
}

const motley = new Person('Motley', 12)
motley.speak()
console.log(motley)

/* what if I want my object to have some methods?
object is going to inherit the prototype of this constructor
we are going to give it prototype methods
and as soon as we declare a new object from this constructor
it's going to inherit those methods,
to give our fn constuctor prototype methods:
Person.prototype.speak
and this prototype method will = a fn with no arguments
and a block inside
We successfully created an object from a fn constructor
and gave that object a method
all that method does when it's called is console.log a string
this is es5, we are going to replace fn constructors with es6 classes
to create new objects
*/
