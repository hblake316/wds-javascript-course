// Person object
let name = 'Blake'
const favoriteNumber = 316
const level = 10

let person = {
  name: name,
  favoriteNumber: favoriteNumber,
  level: level,
  sayHi: function () {
    console.log('Hi')
  },
  sayBye: () => console.log('Bye'),
  address: {
    street: 'Shadowdale',
    city: 'Nooksack',
  },
  hobbies: ['programming', 'hiking', 'roadtrips'],
}

console.log(person)
console.log(person.name)
person.sayHi()
person.sayBye()
console.log(person.hobbies)
console.log(person.hobbies[1])
console.log(person.address.city)

// Car object
let car = {
  make: 'Toyota',
  model: 'Highlander',
  isUsed: true,
  makeNoise: function () {
    console.log('Beep beep')
  },
}

car.makeNoise()

// this can be done, but don't do it!
console.log(car['make'])

// do this instead
console.log(car.make)

// Book object
let book = {
  title: 'Certain Life',
  author: {
    name: 'Heather Blake',
    age: 50,
  },
}

console.log(book)
console.log(book.propertyThatDoesntExist)

book.title = 'Life of Certainty'
console.log(book.title)
