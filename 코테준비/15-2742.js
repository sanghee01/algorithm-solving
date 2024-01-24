const input = Number(require("fs").readFileSync("input.txt").toString().trim());

let answer = "";

for (let i = input; i > 0; i--) {
  answer += i + "\n";
}

console.log(answer);
