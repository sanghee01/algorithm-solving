const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
input.shift();

const stack = [];
const answer = [];

for (let i = 0; i < n; i++) {
  let command = input[i].split(" ");
  if (command[0] === "push") stack.push(Number(command[1]));
  else if (command[0] === "pop") {
    if (stack.length === 0) answer.push(-1);
    else {
      answer.push(stack[stack.length - 1]);
      stack.pop();
    }
  } else if (command[0] === "size") answer.push(stack.length);
  else if (command[0] === "empty") {
    if (stack.length === 0) answer.push(1);
    else answer.push(0);
  } else if (command[0] === "top") {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack[stack.length - 1]);
  }
}

console.log(answer.join("\n"));
