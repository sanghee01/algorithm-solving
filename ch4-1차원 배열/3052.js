const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let numbers = input.map((x) => parseInt(x));

let result = numbers.map((x) => x % 42);
let count = 0;
let newArr = [];

for (let i = 0; i < result.length; i++) {
  if (!newArr.includes(result[i])) {
    newArr.push(result[i]);
    count++;
  }
}

console.log(count);
