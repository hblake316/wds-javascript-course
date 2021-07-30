// value types - strings, booleans, numbers
let a = 10
let b = a

console.log('a = ' + a, 'b = ' + b)

b = b + 1

console.log('a = ' + a, 'b = ' + b)

// reference types - arrays, objects
// reference an address (location) in memory
let d = [1, 2]
let e = d

console.log('d = ' + JSON.stringify(d), 'e = ' + JSON.stringify(e))

e[0] = 3
e.push(4)

console.log('d = ' + JSON.stringify(d), 'e = ' + JSON.stringify(e))

// equality of reference types
const room1 = ['Blake', 2]
const room2 = ['Blake', 2]
console.log(room1 === room2)

// changing what is stored in an object at a memory location
const bag = ['blueberries', 'mangoes']
bag.push('almond milk')
console.log(bag)

// changing the object structure stored at a memory location
const person = {
  name: 'Blake',
}
person = { name: 'Blake', favoriteNumber: 316 }
console.log(person)
