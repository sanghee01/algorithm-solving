const input = require("fs").readFileSync("input.txt").toString().trim();

let list = [];

for (let i = 97; i <= 122; i++) {
  if (input.includes(String.fromCharCode(i))) {
    list.push(input.indexOf(String.fromCharCode(i)));
  } else {
    list.push(-1);
  }
}

console.log(list.join(" "));
