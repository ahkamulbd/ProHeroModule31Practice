// Quiz # 1

function min(nums) {
    return Math.min(nums);
}
console.log(min([1, 3, 2]))

// Quiz # 2

const cube = x => x * x * x;
console.log(cube(2))

// Quiz # 3

const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);


// Quiz # 5

const { x, y, z } = { x: 1, y1: 2, z: 3 };

console.log(y);

// Quiz 6

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);

// Quiz 7

const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];

const xFind = friends.find(friend => friend.length == 5);

console.log(xFind);