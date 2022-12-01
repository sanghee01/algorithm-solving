const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
for (let i = 0; i < input[1].length; i++) {
  sum += parseInt(input[1][i]);
}

console.log(sum);
