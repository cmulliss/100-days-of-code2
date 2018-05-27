// fat arrow fns

const integers = [1, 2, 3]; // map

// es5
// const updatedIngers = integers.map(function (number) {
//   return (number += 1)
// })

// es6, an implicit return
const updatedIngers = integers.map(number => (number += 1));
console.log(updatedIngers);

// map takes in a fn,
// it's the fn that's updating every single integer.
// goes through every element of our array
// and updates it according to what we want our return value to be

const updatedIngers = integers.map(number => (number += 2));
console.log(updatedIngers);

// can update to a string, need to use () as no argument
const updatedIngers2 = integers.map(() => "Cherry");
console.log(updatedIngers2);

const ages = [22, 23, 6, 18];
const adults = ages.filter(function(age) {
  return age > 18;
});
console.log(adults);

const ages2 = [22, 23, 6, 18];
const adults2 = ages.filter(age2 => age2 > 18);
console.log(adults2);

// can also add unique key provided by 'map'

const tasks = ["clean sink", "ironing", "make yoghourt"];

const element = <ol>{tasks.map((task, index) => <li>{task}</li>)}</ol>;
console.log(element);
