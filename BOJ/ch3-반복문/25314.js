const input = Number(require("fs").readFileSync("../input.txt").toString());

let answer = "";

for (let i = 0; i < input / 4; i++) {
  answer += "long ";
}
answer += "int";

console.log(answer);
