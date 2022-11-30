const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let search = parseInt(input[0].trim().split(" ")[1]);
let lowNum = [];
let numbers = input[1].trim().split(" ");
for (let i = 0; i < input[1].length; i++) {
  if (numbers[i] < search) {
    lowNum.push(numbers[i]);
  }
}

for (let i = 0; i < lowNum.length; i++) {
  process.stdout.write(lowNum[i] + " ");
}

/*

/// filter와 join 메서드 이용하는 방법

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(x => Number(x));

const answer = arr.filter(v => max > v); 

console.log(answer.join(' '));
*/
