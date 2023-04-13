const input = require("fs").readFileSync("../input.txt").toString().trim();
// 띄어쓰기로 나누는 것이 아니므로 문자열의 가장 앞부분과 뒷부분의 공백을 지워주는 trim()을 사용해야 함
console.log(input + "??!");
