const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) rl.close();
});

rl.on("close", () => {
  const N = Number(input[0]);
  const ingredient = input[1].split(" ").map(Number);
  let sum = 0;
  let ok = false; // 가장 높은 재료를 만났는가
  for (let i = 0; i < N; i++) {
    sum += ingredient[i];
    if (ingredient[i] > ingredient[i - 1] && ok) {
      sum = 0;
      console.log(sum);
      return;
    } else if (ingredient[i] < ingredient[i - 1]) {
      ok = true;
    }
  }
  console.log(sum);
  rl.close();
});
