const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
input.shift();

const answer = [];

for (let i = 0; i < n; i++) {
  let stack = [];
  let bracket = input[i].split("");
  for (let j = 0; j < bracket.length; j++) {
    if (bracket[j] === "(") stack.push(bracket[j]);
    else {
      if (stack.length === 0) {
        answer.push("NO");
        break;
      } else {
        stack.pop();
      }
    }
  }
  console.log(stack);

  if (stack.length !== 0) {
    answer.push("NO");
    console.log(i);
    continue;
  }
  answer.push("YES");
}

console.log(answer.join("\n"));
