const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let arr = input[i].trim();
  let stack = [];
  let answer = "YES";
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(") {
      stack.push(arr[j]);
    } else {
      if (!stack[0]) {
        answer = "NO";
        break;
      }
      stack.pop();
    }
  }
  if (stack[0]) answer = "NO";
  console.log(answer);
}
