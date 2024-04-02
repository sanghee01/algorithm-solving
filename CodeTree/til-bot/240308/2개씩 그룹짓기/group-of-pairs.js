const input = require("fs").readFileSync(0).toString().trim().split("\n");
const list = input[1].split(" ").map(Number).sort((a,b)=>{return a-b});
console.log(list[parseInt(list.length/2)]+list[parseInt(list.length/2) - 1]);