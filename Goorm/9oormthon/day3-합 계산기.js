const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length == Number(input[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  let T = Number(input[0]);
  let sum = 0;
  for (let i = 1; i <= T; i++) {
    let result;
    let [num1, operator, num2] = input[i].split(" ");
    if (operator === "+") {
      result = Number(num1) + Number(num2);
    } else if (operator === "-") {
      result = Number(num1) - Number(num2);
    } else if (operator === "*") {
      result = Number(num1) * Number(num2);
    } else if (operator === "/") {
      result = Math.trunc(Number(num1) / Number(num2));
    }
    sum += result;
  }
  console.log(sum);
  rl.close();
});
