const input = require("fs").readFileSync("../input.txt").toString().trim();

const N = parseInt(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
