// array push
const a = ["a", "b", "c", "d", "e"];
a.push("f");
a.push(["true", false]);
console.log(a);
console.log(a[5]);
console.log(a[6][0]);
console.log(a[6][1]);

// array length
console.log(a.length);

// array forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
  console.log(index + ": " + number);
});

// array map - returns a new array with the function performed
const newNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(numbers);
console.log(newNumbers);

// array filter - returns a new array filtered on the function
const filteredNumbers = numbers.filter((number) => {
  return number < 3;
});
console.log(filteredNumbers);

// array find - returns first item that meets function criteria
const findNumber = numbers.find((number) => {
  return number > 2;
});
console.log(findNumber);
console.log(typeof findNumber);

// array some returns true if some items match this function
const isTrue = numbers.some((number) => {
  return number > 8;
});
console.log(isTrue);

// array every returns true if every item match this function
const isTrue2 = numbers.every((number) => {
  return number > 2;
});
console.log(isTrue2);

// array reduce - reduces array to a single value
// takes two parameters and an initial value
const reduceNumbers = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);
console.log(reduceNumbers);

const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 }
];

const total = items.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(total);

// array includes - returns if array includes item
const isTrue3 = numbers.includes(3);
console.log(isTrue3);
