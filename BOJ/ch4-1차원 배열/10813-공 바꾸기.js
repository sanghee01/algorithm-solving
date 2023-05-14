const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0].trim().split(" ")[0]);
const M = Number(input[0].trim().split(" ")[1]);
const basket = Array.from({ length: N }, (v, i) => i + 1);

for (let i = 1; i <= M; i++) {
  let arr = input[i]
    .trim()
    .split(" ")
    .map((x) => Number(x));

  [basket[arr[0] - 1], basket[arr[1] - 1]] = [
    basket[arr[1] - 1],
    basket[arr[0] - 1],
  ];
}

console.log(...basket);
