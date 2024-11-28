let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

let answer = "";

for (let number of input) {
  let bigNumber = BigInt(number);
  if (bigNumber % 2n === 0n) {
    answer += "even\n";
  } else {
    answer += "odd\n";
  }
}

console.log(answer);
