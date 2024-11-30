const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let result = 0;

for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) count++;
  }
  if (count === 0 && arr[i] !== 1) result++;
}

console.log(result);
