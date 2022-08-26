const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];

    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}
console.log(getDoubles());

function doubleItOld(num) {
    return num * 2;
}
const doubleIt = num => num * 2;