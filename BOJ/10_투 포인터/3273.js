const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = input[1]
  .trim()
  .split(" ")
  .map((x) => Number(x))
  .sort((a, b) => a - b);
const x = Number(input[2]);

let count = 0;
let sum = 0;
let start = 0;
let end = n - 1;

while (start !== end) {
  sum = arr[start] + arr[end];
  if (sum === x) {
    count++;
    start++;
  } else if (sum > x) {
    end--;
  } else {
    start++;
  }
}

console.log(count);
