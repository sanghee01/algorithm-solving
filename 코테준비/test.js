const fs = require("fs");
let number = Number(fs.readFileSync(0).toString().trim());

function getNum(a, b) {
  if (number === 0) return b;
  number--;
  console.log(number, b);
  return getNum(b, (a * b) % 100);
}

console.log(getNum(2, 4));
