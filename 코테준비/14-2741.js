const input = Number(require("fs").readFileSync("input.txt").toString().trim());

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
