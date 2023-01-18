const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const X = parseInt(input[0]); // 총 금액
const N = parseInt(input[1]); // 물건 종류의 수
let sum = 0;
for (let i = 0; i < N; i++) {
  let stuff = input[i + 2].split(" ");
  sum += stuff[0] * stuff[1];
}

if (parseInt(input[0]) == sum) {
  console.log("Yes");
} else {
  console.log("No");
}
