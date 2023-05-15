const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0].trim().split(" ")[0]);
const M = Number(input[0].trim().split(" ")[1]);
const basket = Array.from({ length: N }, (v) => 0);

for (let i = 1; i <= M; i++) {
  let arr = input[i]
    .trim()
    .split(" ")
    .map((x) => Number(x));
  for (let j = arr[0]; j <= arr[1]; j++) {
    basket[j - 1] = arr[2];
  }
}
console.log(...basket);
