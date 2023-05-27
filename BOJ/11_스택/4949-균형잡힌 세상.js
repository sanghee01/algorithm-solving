const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const arr = input[i];
  const stack = [];
  let answer = "yes";

  if (arr === ".") break;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(" || arr[j] === "[") {
      stack.push(arr[j]);
    } else if (arr[j] === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        answer = "no";
        break;
      }
    } else if (arr[j] === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        answer = "no";
        break;
      }
    }
  }

  if (stack.length > 0) answer = "no";

  console.log(answer);
}
