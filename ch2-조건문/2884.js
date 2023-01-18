const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (M < 45) {
  H = H - 1;
  M = 60 - 45 + M;
  if (H == -1) {
    H = 23;
  }
} else {
  M = M - 45;
}

console.log(`${H} ${M}`);
