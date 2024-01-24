const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const word = input[0];
const index = Number(input[1]) - 1;

console.log(word[index]);
