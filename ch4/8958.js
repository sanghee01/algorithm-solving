const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
let plus = 1;

for (let i = 1; i <= input[0]; i++) {
  let arr = input[i].trim().split("");
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == "O") {
      if (arr[j - 1] == arr[j]) {
        plus++;
      } else {
        plus = 1;
      }
      sum += plus;
    }
  }
  console.log(sum);
  sum = 0;
}
