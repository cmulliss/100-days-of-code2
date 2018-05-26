// let greeting = "hello world"
// console.log(greeting)

// function printName () {
//   var name = 'Cherry'
//   console.log(name)
// }
// printName()
// console.log(name)

// var name = 'Motley'

// if (name === 'Motley') {
//   var fullname = 'Motley Penguin'
// }
// console.log(fullname)

// var varibales are fn scoped, so if not in a fn,
// undortunately, not block scoped,
// but globally scoped

// var name = 'Motley'

// if (name === 'Motley') {
//   let fullname = 'Motley Penguin'
//   console.log(fullname)
// }

// let is however block scoped!
// a block is anything with {}
// let variables only accessible within these {}
// let doesn't let us reuse variable names

// const is also block scoped
// can reassign let variables,
// but can't reassign const variables

// var name = 'Motley'

// if (name === 'Motley') {
//   let fullname = 'Motley Penguin'
//   fullname = 'me'
//   console.log(fullname)
//   const age = 21
//   age = 20
//   console.log(age)
// }

// One exception, with object
// if this was let would work
const person = {
  name: 'Pingu',
  gender: 'Male'
}
// new object fails
// person = {
//   name: 'Pengy',
//   gender: 'Female'
// }
person.name = 'Pengy'
person.gender = 'Female'

console.log(person.name)
console.log(person.gender)

// with const, can't change the value of an object
// but we can change its properties.
