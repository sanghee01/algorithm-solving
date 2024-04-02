function compare(a, b){
    if(a > b){
        a += 25;
        b *= 2;
    }else{
        a *= 2;
        b += 25;
    }
    return [a, b];
}

const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
console.log(...compare(a, b))