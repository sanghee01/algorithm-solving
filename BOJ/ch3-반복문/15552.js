const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);
let answer = "";

for (let i = 1; i <= T; i++) {
  let numbers = input[i].split(" ");
  let A = parseInt(numbers[0]);
  let B = parseInt(numbers[1]);

  answer += A + B + "\n";
}

console.log(answer);
