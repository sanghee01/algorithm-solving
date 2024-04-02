const input = require("fs").readFileSync(0).toString().trim().split("\n");
let list = input;
list.shift()
list = list.sort().join("\n");
console.log(list)