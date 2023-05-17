let input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let score = 0;
let creditSum = 0;
let credit = 0;
for (let i = 0; i < input.length; i++) {
  credit = Number(input[i].trim().split(" ")[1]);
  let grade = input[i].trim().split(" ")[2];
  if (grade !== "P") {
    creditSum += credit;
  }

  if (grade === "A+") score += 4.5 * credit;
  else if (grade === "A0") score += 4.0 * credit;
  else if (grade === "B+") score += 3.5 * credit;
  else if (grade === "B0") score += 3.0 * credit;
  else if (grade === "C+") score += 2.5 * credit;
  else if (grade === "C0") score += 2.0 * credit;
  else if (grade === "D+") score += 1.5 * credit;
  else if (grade === "D0") score += 1.0 * credit;
}
console.log(score / creditSum);
