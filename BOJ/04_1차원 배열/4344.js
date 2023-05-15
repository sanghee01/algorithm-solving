const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");
let average = 0;
let sum = 0;
let count = 0;

for (let i = 1; i <= input[0]; i++) {
  let arr = input[i]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));

  for (let j = 1; j < arr.length; j++) {
    sum += arr[j];
  }

  average = sum / arr[0];
  for (let k = 1; k < arr.length; k++) {
    if (arr[k] > average) {
      count++;
    }
  }
  console.log(((count / arr[0]) * 100).toFixed(3) + "%");
  sum = 0;
  count = 0;
}
