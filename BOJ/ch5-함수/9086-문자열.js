const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  let arr = input[i].trim();
  console.log(arr[0] + arr[arr.length - 1]);
}
