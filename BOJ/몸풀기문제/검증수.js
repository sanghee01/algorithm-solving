const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sum = input.reduce((a, b) => a + b * b, 0);

console.log(sum % 10);
