const input = require("fs").readFileSync("../input.txt").toString().trim();

const year = parseInt(input);

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  console.log(1);
} else {
  console.log(0);
}
