const input = require("fs").readFileSync("../input.txt").toString().trim();

const N = parseInt(input);
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
}
console.log(sum);
