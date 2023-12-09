const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let NLength; // 기능 수
let time; // 현재 시각

let input = [];

rl.on("line", (line) => {
  if (input.length != 1) {
    input.push(Number(line));
  } else {
    input.push(line.split(" ").map(Number));
  }
  if (input.length == 2) {
    NLength = input[0];
    time = input[1][0] * 60 + input[1][1];
  } else {
    time += Number(line);
    if (input.length == NLength + 2) {
      rl.close();
    }
  }
});

rl.on("close", () => {
  let T = Math.trunc(time / 60);
  if (T >= 24) T = T - 24 * Math.trunc(T / 24);
  let M = time % 60;

  console.log(T, M);
  rl.close();
});
