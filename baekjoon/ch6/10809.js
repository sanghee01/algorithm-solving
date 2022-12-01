const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("");

let cnt = -2; // 0이면 index 0인곳에서 문제생김
let arr = input.map((x) => x.charCodeAt());

for (let i = 97; i <= 122; i++) {
  cnt = -2;
  for (let j = 0; j < arr.length; j++) {
    if (i == arr[j] && cnt == -2) {
      cnt = j;
      process.stdout.write(String(cnt));
      process.stdout.write(" ");
    }
  }
  if (cnt == -2) {
    cnt = -1;
    process.stdout.write(String(cnt));
    process.stdout.write(" ");
  }
}

/*
간단한 방법 : indexOf 사용

const input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));

*/
