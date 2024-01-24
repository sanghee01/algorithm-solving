const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const A = Number(input[i].split(" ")[0]);
  const B = Number(input[i].split(" ")[1]);
  if (A == 0 && B == 0) break;
  console.log(A + B);
}
