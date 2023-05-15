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
  for (let j = 0; j < Math.floor((arr[1] - arr[0] + 1) / 2); j++) {
    [basket[arr[0] - 1 + j], basket[arr[1] - 1 - j]] = [
      basket[arr[1] - 1 - j],
      basket[arr[0] - 1 + j],
    ];
  }
}
console.log(...basket);
