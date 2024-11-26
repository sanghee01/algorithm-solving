const [stringA, stringB, stringC] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [numberA, numberB, numberC] = [stringA, stringB, stringC].map(Number);

console.log(numberA + numberB - numberC);
console.log(stringA + stringB - stringC);
