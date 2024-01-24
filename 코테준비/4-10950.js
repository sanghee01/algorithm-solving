const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const A = Number(input[i].split(" ")[0]);
  const B = Number(input[i].split(" ")[1]);
  console.log(A + B);
}
