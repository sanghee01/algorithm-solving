const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  console.log(parseInt(input[i][0]) + parseInt(input[i][2]));
}
