const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length == 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const N = input[0];
  let numbers = new Set(input[1].split(" ").map(Number));
  numbers = [...numbers];
  numbers.sort((a, b) => a - b);
  console.log(...numbers);
  process.stdin.destroy();
});
