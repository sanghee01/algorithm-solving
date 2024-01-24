const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const sum = input[1]
  .split("")
  .map(Number)
  .reduce((a, b) => a + b);

console.log(sum);
