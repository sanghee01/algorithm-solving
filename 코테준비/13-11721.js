const input = require("fs").readFileSync("input.txt").toString().trim();

const line = Math.floor(input.length / 10);
for (let i = 0; i <= line; i++) {
  console.log(input.substring(i * 10, i * 10 + 10));
}
