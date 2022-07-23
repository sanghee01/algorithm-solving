const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const nums = input.map((v) => v.split(" ").map((x) => +x));
const factor = nums[1];

if (factor.length == 1) {
  console.log(factor[0] * factor[0]);
} else {
  factor.sort((a, b) => a - b);
  console.log(factor[0] * factor[factor.length - 1]);
}
