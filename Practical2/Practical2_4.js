// d. Write a program using array methods (map, filter, reduce)
let numbers = [10, 20, 30, 40, 50];

// map()
let doubled = numbers.map(num => num * 2);

// filter()
let greater = numbers.filter(num => num > 25);

// reduce()
let sum = numbers.reduce((total, num) => total + num, 0);

console.log("Original:", numbers);
console.log("Map:", doubled);
console.log("Filter:", greater);
console.log("Reduce (Sum):", sum);