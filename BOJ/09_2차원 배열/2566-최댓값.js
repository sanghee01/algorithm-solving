let input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let max = Number.MIN_SAFE_INTEGER;
let answer = [null, null];

for (let i = 0; i < input.length; i++) {
  let arr = input[i]
    .trim()
    .split(" ")
    .map((x) => Number(x));
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > max) {
      max = arr[j];
      answer[0] = i + 1;
      answer[1] = j + 1;
    }
  }
}

console.log(max);
console.log(...answer);
