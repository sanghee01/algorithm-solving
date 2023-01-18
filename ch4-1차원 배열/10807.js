const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let search = input[2];
let numbers = input[1].trim().split(" ");
let cnt = 0;

for (let i = 0; i < parseInt(input); i++) {
  if (search == numbers[i]) {
    cnt++;
  }
}
console.log(cnt);
