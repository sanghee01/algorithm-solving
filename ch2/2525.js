const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let H = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
let C = parseInt(input[1]);

let sum = H * 60 + M + C;

H = parseInt(sum / 60);
M = sum % 60;

if (H >= 24) {
  H = H - 24;
}

console.log(`${H} ${M}`);
