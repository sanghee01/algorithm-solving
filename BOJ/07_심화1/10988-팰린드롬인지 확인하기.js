let input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("");

let answer = 1;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== input[input.length - i - 1]) {
    answer = 0;
  }
}

console.log(answer);
