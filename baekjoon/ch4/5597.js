const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let numbers = input.map((x) => parseInt(x));

for (let i = 1; i <= 30; i++) {
  if (!numbers.includes(i)) {
    console.log(i);
  }
}
