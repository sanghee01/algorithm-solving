const fs = require("fs");
const number = Number(fs.readFileSync(0).toString().trim());

function sequence(n){
    if(n===1) return 1;
    if(n===2) return 2;

    return sequence(parseInt(n/3)) + sequence(n-1);
}

console.log(sequence(number))