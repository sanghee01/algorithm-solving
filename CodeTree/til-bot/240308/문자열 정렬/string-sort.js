const input = require("fs").readFileSync(0).toString().trim();
let str = [...input];
str = str.sort().join("");

console.log(str);