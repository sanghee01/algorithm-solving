function findMin (a,b,c=100){
    return Math.min(a,b,c);
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a,b,c] = input.map(Number);
console.log(findMin(a,b,c));