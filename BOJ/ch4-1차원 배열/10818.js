const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let numbers = input[1]
  .trim()
  .split(" ")
  .map((x) => parseInt(x));

let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(min + " " + max);
