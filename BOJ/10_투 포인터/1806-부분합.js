const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0].trim().split(" ")[0]);
const S = Number(input[0].trim().split(" ")[1]);
const arr = input[1]
  .trim()
  .split(" ")
  .map((x) => Number(x));
let start = 0;
let end = 0;
let intervalSum = arr[0];
let answer = N;
let isAnswer = false;

while (end < N) {
  if (intervalSum >= S) {
    isAnswer = true;
    if (end - start + 1 < answer) {
      answer = end - start + 1;
    }
    intervalSum -= arr[start++];
  } else {
    intervalSum += arr[++end];
  }
}
if (!isAnswer) answer = 0;

console.log(answer);
