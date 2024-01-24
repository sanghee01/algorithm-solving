const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const min = Math.min(...input[1].split(" ").map(Number));
const max = Math.max(...input[1].split(" ").map(Number));
console.log(min, max);
