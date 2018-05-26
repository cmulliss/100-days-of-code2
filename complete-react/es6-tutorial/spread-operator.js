// anything you can iterate through you can use the spread operator

const names = ['mot', 'motley', 'pengy']
const moreNames = ['pingu', 'pongu', 'feathers']

console.log(...names)
// expands the array into it's elements
// mot motley pengy
// how to get a combined array, with a new value between them
// spread the contents of the second array into the first etc
// destructures and spreads our array
const allnames = [...names, 'me', ...moreNames]

console.log(allnames)
