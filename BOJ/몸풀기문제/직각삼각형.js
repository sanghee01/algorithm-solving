const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";

input.pop();
for (let arr of input) {
  const lines = arr
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  if (lines[0] * lines[0] === lines[1] * lines[1] + lines[2] * lines[2]) {
    answer += "right\n";
  } else {
    answer += "wrong\n";
  }
}
console.log(answer);
