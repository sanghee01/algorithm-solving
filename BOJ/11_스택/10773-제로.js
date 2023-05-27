const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const K = Number(input[0]);
const stack = [];

for (let i = 1; i <= K; i++) {
  if (Number(input[i]) === 0 && i !== 1) {
    stack.pop(Number(input[i - 1]));
  } else {
    stack.push(Number(input[i]));
  }
}

console.log(stack[0] ? stack.reduce((a, c) => a + c) : 0);
