function power(a, b){
    let n = 1;
    for(let i = 0; i < b; i++){
        n *= a;
    }
    return n;
}

const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
console.log(power(a, b));