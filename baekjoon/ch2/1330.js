const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ");

let A = parseInt(input[0]); // 아 수 비교할때 숫자로 변환해야하지..
let B = parseInt(input[1]);

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else if (A == B) {
  console.log("==");
}
