function findSum(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum += i;
    }
    return sum;
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

console.log(Math.floor(findSum(Number(input))/10));