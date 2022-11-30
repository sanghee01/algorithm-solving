const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);
let result = 0;

if (A == B && A == C) {
  result = 10000 + A * 1000;
} else if (A == B && A != C) {
  result = 1000 + A * 100;
} else if (A == C && A != B) {
  result = 1000 + A * 100;
} else if (B == C && B != A) {
  result = 1000 + B * 100;
} else if (A != B && B != C && A != C) {
  if (A > B && A > C) {
    result = A * 100;
  } else if (B > A && B > C) {
    result = B * 100;
  } else if (C > A && C > B) {
    result = C * 100;
  }
}

console.log(result);
