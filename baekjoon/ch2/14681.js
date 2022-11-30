// const input = require("fs")
//   .readFileSync("../input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const A = parseInt(input[0]);
// const B = parseInt(input[1]);

// if (A > 0 && B > 0) {
//   console.log(1);
// } else if (A > 0 && B < 0) {
//   console.log(4);
// } else if (A < 0 && B < 0) {
//   console.log(3);
// } else if (A < 0 && B > 0) {
//   console.log(2);
// }

// 해당 문제는 fs로 하면 런타임 에러가 뜸

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }

  process.exit();
});
