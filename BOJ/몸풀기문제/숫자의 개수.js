const [A, B, C] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const numberCount = new Array(10).fill(0);
const multiplication = [...(A * B * C).toString()];

multiplication.forEach((num) => {
  if (num === "0") numberCount[0]++;
  else if (num === "1") numberCount[1]++;
  else if (num === "2") numberCount[2]++;
  else if (num === "3") numberCount[3]++;
  else if (num === "4") numberCount[4]++;
  else if (num === "5") numberCount[5]++;
  else if (num === "6") numberCount[6]++;
  else if (num === "7") numberCount[7]++;
  else if (num === "8") numberCount[8]++;
  else if (num === "9") numberCount[9]++;
});

console.log(numberCount.join("\n"));
