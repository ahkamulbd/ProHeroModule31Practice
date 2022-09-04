const numbers = [12, 15, 23, 45, 11, 18, 9, 55, 61, 1];

const bigNums = numbers.filter(number => number > 20);

//console.log(bigNums);

const tinyNums = numbers.filter(n => n < 10);
//console.log(tinyNums);

const evenNums = numbers.filter(a => a % 2 === 0);
//console.log(evenNums);

const fivesFilter = numbers.filter(num => num % 5 === 0);
console.log(fivesFilter);
// with filter method elements which is divisible 5 will be printed i.e. 15, 45, 55 will be printedd

const fivesFind = numbers.find(num => num % 5 === 0);
console.log(fivesFind);
// with find method only first element which is divisible 5 will be printed i.e. only 15 will be printed 



// Other Example

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 85000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 55000 },
]

const expensive = products.filter(product => product.price > 30000);
//console.log(expensive);

const cheap = products.find(product => product.price < 40000);  // Uses of find
//console.log(cheap);

