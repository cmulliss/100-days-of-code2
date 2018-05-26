// template strings, good replacement for es5 string concatenation

const name = 'Motley'
const age = 12

// es5 string concatenation
// const sentence = 'My name is ' + name + ', and I am ' + age + ' years old'
// console.log(sentence)

// es6 template strings, use backticks
const sentence = `My name is ${name}, and I am ${age * 2} years old`
console.log(sentence)
