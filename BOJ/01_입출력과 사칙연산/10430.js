const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ");

A = parseInt(input[0]); // string으로 받아와서 int형으로 변환해줘야함
B = parseInt(input[1]);
C = parseInt(input[2]);

console.log((A + B) % C); // int형 변환안하면 A+B에서 걍 숫자 '문자'가 합쳐지는거임...
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
