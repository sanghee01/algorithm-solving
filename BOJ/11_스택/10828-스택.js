const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const stack = [];
const answer = [];

for (let i = 1; i <= N; i++) {
  let instruction = input[i].trim().split(" ")[0];
  let num = Number(input[i].trim().split(" ")[1]);
  switch (instruction) {
    case "push":
      stack.push(num);
      break;
    case "pop":
      answer.push(stack.pop() || -1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      answer.push(stack[stack.length - 1] || -1);
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
