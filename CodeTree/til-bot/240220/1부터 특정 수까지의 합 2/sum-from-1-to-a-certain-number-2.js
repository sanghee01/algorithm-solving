const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

function sum(n){
    if(n===1) return 1;
    return n + sum(n-1)
}

console.log(sum(input));