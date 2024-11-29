const [x, y, w, h] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = Math.abs(y - h);
const b = Math.abs(x - w);
const c = Math.abs(x);
const d = Math.abs(y);

console.log(Math.min(a, b, c, d));
