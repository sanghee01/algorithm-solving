const input = require("fs").readFileSync("../input.txt").toString().trim();

const score = parseInt(input);

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else if (score >= 0) {
  console.log("F");
}
