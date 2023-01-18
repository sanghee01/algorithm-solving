const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ");

let change = (x) => {
  let num = x.split("");

  let tmp = 0;
  tmp = num[0];
  num[0] = num[2];
  num[2] = tmp;
  let changeNum = num.join("");
  return changeNum;
};

let large =
  change(input[0]) > change(input[1]) ? change(input[0]) : change(input[1]);

console.log(large);

/*
reverse : 거꾸로 뒤집는 메소드

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

const [a, b] = input.map(v => [...v].reverse().join(''));

console.log(a > b ? a : b);
// console.log(Math.max(a, b));

*/
