const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  const word = input[i];
  console.log(`${word[0]}${word[word.length - 1]}`);
}
