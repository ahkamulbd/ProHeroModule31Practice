// // Ex 1

// const numbers = [12, 56, 87, 44];
// const half = numbers.map(n => n / 2);
// const thirds = numbers.map(x => x / 3);

// console.log(half);
// console.log(thirds);

// // Ex 2

// const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

// const friendsLetters = friends.map(friend => friend[0]);
// console.log(friendsLetters);

// const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

// Ex 3

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 85000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 55000 },
]
//const items = products.map(product => console.log(product));
const items = products.map(product => product.name);
console.log(items);

const prices = products.map(p => p.price);
console.log(prices);

// Ex 4

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

friends.forEach(friend => console.log(friend));