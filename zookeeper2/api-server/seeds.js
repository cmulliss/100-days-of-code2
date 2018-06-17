module.exports = function () {
  let faker = require('faker')
  let _ = require('lodash')

  return {
    animals: _.times(10, function (num) {
      return {
        id: num,
        name: faker.name.firstName(),
        species: faker.company.catchPhraseNoun(),
        gender: faker.helpers.randomize(['m', 'f']),
        age: faker.random.number(100)
      }
    }),
    zookeeper: _.times(10, function (n) {
      return {
        id: n,
        name: {
          firstName: faker.name.firstName(),
          lasttName: faker.name.lastName()
        },
        salary: faker.random.number(5000, 20000)
      }
    })
  }
}
