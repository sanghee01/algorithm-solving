const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
let w;
let r;

rl.on("line", (line) => {
  input = line.split(" ");
  w = Number(input[0]);
  r = Number(input[1]);
  rl.close();
});

rl.on("close", () => {
  console.log(Math.floor(w * (1 + r / 30)));
});
