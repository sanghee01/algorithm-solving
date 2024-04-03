const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
input.shift();

function sortSpot(a, b) {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
}

const list = [];
for (let i = 0; i < N; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  list.push([x, y]);
}
list.sort(sortSpot);

console.log(list.join("\n").replaceAll(",", " "));
