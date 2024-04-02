const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function compareNum(a, b){
    if(a > b){
        a *= 2;
        b += 10;
    }else{
        a += 10;
        b *= 2;
    }

    return [a, b]
}

console.log(...compareNum(a, b))