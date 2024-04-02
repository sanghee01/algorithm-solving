const input = require("fs").readFileSync(0).toString().trim().split("\n");
let word1 = input[0].split("").sort().join("");
let word2 = input[1].split("").sort().join("");

if(word1 === word2) console.log("Yes");
else console.log("No");