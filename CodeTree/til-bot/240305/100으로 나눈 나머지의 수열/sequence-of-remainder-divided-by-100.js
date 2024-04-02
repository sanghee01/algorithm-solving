const fs = require("fs");
let number = Number(fs.readFileSync(0).toString().trim());

function getNum(a, b){
    if(number === 1) return a;
    number -= 1;
    return getNum(b, (a*b)%100);        
}

console.log(getNum(2, 4));