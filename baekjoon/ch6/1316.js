const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let count = 0;
for (let i = 1; i <= input[0]; i++) {
  let arr = input[i].trim().split("");
  count++;

  let prev = [];
  for (let j = 0; j < arr.length; j++) {
    if (prev.includes(arr[j])) {
      count--;
      break;
    } else if (arr[j - 1] != arr[j]) {
      prev.push(arr[j - 1]);
    }
  }
}

console.log(count);
