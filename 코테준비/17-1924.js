const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

const M = Number(input[0]);
const D = Number(input[1]);
let days = 0;
let answer;

for (let i = 1; i < M; i++) {
  if (
    i === 1 ||
    i === 3 ||
    i === 5 ||
    i === 7 ||
    i === 8 ||
    i === 10 ||
    i === 12
  ) {
    days += 31;
  } else if (i === 4 || i === 6 || i === 9 || i === 11) {
    days += 30;
  } else {
    days += 28;
  }
}
days += D;

if (days % 7 === 1) {
  answer = "MON";
} else if (days % 7 === 2) {
  answer = "TUE";
} else if (days % 7 === 3) {
  answer = "WED";
} else if (days % 7 === 4) {
  answer = "THU";
} else if (days % 7 === 5) {
  answer = "FRI";
} else if (days % 7 === 6) {
  answer = "SAT";
} else if (days % 7 === 0) {
  answer = "SUN";
}
console.log(answer);
