const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  let arr = input[i].trim().split(" ");
  for (let j = 0; j < arr[1].length; j++) {
    let texts = arr[1].split("");
    for (let k = 0; k < arr[0]; k++) {
      process.stdout.write(String(texts[j]));
    }
  }
  console.log("");
}
