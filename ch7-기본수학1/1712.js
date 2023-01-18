const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ");

const [A, B, C] = [parseInt(input[0]), parseInt(input[1]), parseInt(input[2])];

let answer = Math.floor(A / (C - B)) + 1;

B >= C ? console.log(-1) : console.log(answer);

/* 반복문을 쓰면 시간 제한으로 틀림
const defaultAmount = parseInt(input[0]);
const produceAmount = parseInt(input[1]);
const sellAmount = parseInt(input[2]);

let sum = defaultAmount;
let count = 0;

while (sum > 0) {
  count++;
  sum += produceAmount - sellAmount;

  if (count == 2100000001) {
    count = -2;
    break;
  }
}
console.log(count + 1);

*/
