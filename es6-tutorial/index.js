// use classes to declare new objects
// name and age as properties

class Person {
  constructor (name, age, children) {
    this.name = name
    this.age = age
    this.children = children
  }
  // to add a prototype method
  speak () {
    console.log(`Hi, my name is ${this.name}`)
  }
  // return is optional
  birth (child) {
    this.children.push(child)
    return this.children
  }
}
// new Person with properties name and age
const motley = new Person('Motley', 12, ['pingu', 'pongu'])
motley.speak()
motley.birth('chick')
console.log(motley.children)
