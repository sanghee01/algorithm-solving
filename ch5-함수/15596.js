// js로 제출이 안되는 문제

const input = parseInt(require("fs").readFileSync("../input.txt").toString());

let result = 0;
const sum = (num) => {
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
sum(input);

console.log(result);
