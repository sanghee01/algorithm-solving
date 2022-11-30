const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let numbers = input.map((x) => parseInt(x));
let max = Number.MIN_SAFE_INTEGER;
let index = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
    index = i + 1;
  }
}
console.log(max);
console.log(index);
