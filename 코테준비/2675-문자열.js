const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < Number(input[0]); i++) {
  const count = Number(input[i + 1].split(" ")[0]);
  const word = input[i + 1].split(" ")[1];
  let list = "";
  for (let j = 0; j < word.length; j++) {
    list += word[j].repeat(count);
  }
  console.log(list);
}
