const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let scores = input[1]
  .trim()
  .split(" ")
  .map((x) => parseInt(x));

let max = Math.max(...scores);

let newScores = scores.map((x) => (x / max) * 100);

let sum = 0;

for (let i = 0; i < newScores.length; i++) {
  sum += newScores[i];
}

console.log(sum / newScores.length);
