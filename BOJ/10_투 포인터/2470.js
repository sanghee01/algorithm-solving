const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map((x) => Number(x))
  .sort((a, b) => a - b);

let start = 0;
let end = N - 1;
let minSum = Number.MAX_SAFE_INTEGER;
let answer = [null, null];

while (start !== end) {
  if (Math.abs(arr[start] + arr[end]) < minSum) {
    minSum = Math.abs(arr[start] + arr[end]);
    answer[0] = arr[start];
    answer[1] = arr[end];
  }

  if (arr[start] + arr[end] < 0) {
    start++;
  } else {
    end--;
  }
}

console.log(...answer);
