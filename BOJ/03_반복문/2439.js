const input = parseInt(
  require("fs").readFileSync("../input.txt").toString().trim()
);

for (let i = 1; i <= input; i++) {
  let answer = "";
  for (let k = input - i; k > 0; k--) {
    answer += " ";
  }
  for (let j = 0; j < i; j++) {
    answer += "*";
  }
  console.log(answer);
}

/*
let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);

let star = new Array(num).fill(' ');

for (let i = num - 1; i >= 0; i--) {
  star[i] = '*';
  
  console.log(star.join('')); 
}
*/
