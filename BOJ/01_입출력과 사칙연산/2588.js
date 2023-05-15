const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input[0] * input[1][2]);
console.log(input[0] * input[1][1]);
console.log(input[0] * input[1][0]);
console.log(input[0] * input[1]);
